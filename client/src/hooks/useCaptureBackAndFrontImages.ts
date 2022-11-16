import {
  Accessor,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  untrack,
} from "solid-js";
import { useMediaDevicesGetUserMedia } from "./useMediaDevicesGetUserMedia";

export const useCaptureBackAndFrontImages = (
  videoEl: Accessor<HTMLVideoElement | undefined>,
  canvasEl: Accessor<HTMLCanvasElement | undefined>
) => {
  const [letsGo, setLetsGo] = createSignal<
    "idle" | "capture1" | "capture2" | "done"
  >("idle");
  const cameraCapture = useMediaDevicesGetUserMedia();
  const [currentCameraMode, setCurrentCameraMode] = createSignal<
    "environment" | "user"
  >("environment");
  const [frontPictureUrl, setFrontPictureUrl] = createSignal<string>();
  const [backPictureUrl, setBackPictureUrl] = createSignal<string>();

  const [isVideoLoaded, setIsVideoLoaded] = createSignal(false);

  createEffect(() => {
    const mode = currentCameraMode();
    cameraCapture.startCapture(mode);
  });

  // Assign stream to video
  createEffect(() => {
    setIsVideoLoaded(false);
    const video = videoEl();
    if (!video) return;
    const stream = cameraCapture.stream();
    if (!stream) return;

    video.srcObject = stream;

    const loadedDataCallback = () => setIsVideoLoaded(true);
    video.addEventListener("loadeddata", loadedDataCallback);
    onCleanup(() =>
      video.removeEventListener("loadeddata", loadedDataCallback)
    );
  });

  const captureCurrentImage = () => {
    if (!cameraCapture.stream()) return;
    const video = videoEl();
    if (!video) return;
    const canvas = canvasEl();
    if (!canvas) return;
    //
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      alert("canvas context not found");
      throw new Error("canvas context not found");
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const currentImageUrl = canvas.toDataURL("image/webp");
    if (currentCameraMode() === "environment")
      setBackPictureUrl(currentImageUrl);
    if (currentCameraMode() === "user") setFrontPictureUrl(currentImageUrl);
  };

  createEffect(() => {
    if (letsGo() !== "capture1") return;
    if (!isVideoLoaded()) return;
    captureCurrentImage();
    setIsVideoLoaded(false);
    cameraCapture.stopCapture();
    flip();
    setLetsGo("capture2");
  });

  createEffect(() => {
    if (letsGo() !== "capture2") return;
    if (!isVideoLoaded()) return;
    captureCurrentImage();
    setIsVideoLoaded(false);
    cameraCapture.stopCapture();
    setLetsGo("done");
  });

  const flip = () => {
    setCurrentCameraMode((p) => (p === "user" ? "environment" : "user"));
  };

  const capture = () => {
    untrack(() => {
      if (letsGo() !== "idle") return;
      setLetsGo("capture1");
    });
  };

  return {
    flip,
    capture,
    frontPictureUrl,
    backPictureUrl,
    error: cameraCapture.error,
    isRequesting: cameraCapture.isRequesting,
  };
};
