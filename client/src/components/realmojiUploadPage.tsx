import { Button, Flex, Heading, Image, Spinner } from "@hope-ui/solid";
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onCleanup,
  Show,
  Suspense,
} from "solid-js";
import useRequireLogin from "../hooks/requireLogin";
import { useCaptureBackAndFrontImages } from "../hooks/useCaptureBackAndFrontImages";
import { useMediaDevicesGetUserMedia } from "../hooks/useMediaDevicesGetUserMedia";
import { usePersonMeQuery } from "../openApiClients/berealWrapperQueries";

const RealmojiUploadPage = () => {
  // useRequireLogin();

  // const meQuery = usePersonMeQuery();

  const [activeEmoji, setActiveEmoji] = createSignal<string>();

  // const cameraCapture = useMediaDevicesGetUserMedia();

  // Start back camera preview right the way
  // const [currentCameraMode, setCurrentCameraMode] = createSignal<
  //   "environment" | "user"
  // >("environment");

  // createEffect(() => {
  //   const mode = currentCameraMode();
  //   cameraCapture.startCapture(mode);
  // });

  const [videoEl, setVideoEl] = createSignal<HTMLVideoElement>();
  const [canvasEl, setCanvasEl] = createSignal<HTMLCanvasElement>();
  const captureBoth = useCaptureBackAndFrontImages(videoEl, canvasEl);
  // const canvasContext2d = createMemo(() => canvasEl()?.getContext("2d"));

  // createEffect(() => {
  //   const videoElement = videoEl();
  //   const cameraStream = cameraCapture.stream();
  //   if (!videoElement || !cameraStream) return;
  //   videoElement.srcObject = cameraStream;
  //   onCleanup(() => {
  //     videoElement.srcObject = null;
  //   });
  // });

  return (
    <Suspense fallback={<Spinner />}>
      <Show when={captureBoth.error()}>
        <Heading>{` ${captureBoth.error()}`}</Heading>
      </Show>
      <Show when={captureBoth.isRequesting()}>
        <div>Please accept request</div>
        <Spinner />
      </Show>
      {/* <Show when={!activeEmoji()}>
        <div>
          <For each={meQuery.data?.realmojis}>
            {(realmoji) => (
              <div
                onClick={() => {
                  setActiveEmoji(realmoji.emoji);
                }}
              >
                <div>{realmoji.emoji}</div>
                <Image src={realmoji.media.url} />
              </div>
            )}
          </For>
        </div>
      </Show> */}
      <div>
        <video
          autoplay={true}
          style={{ background: "whitesmoke" }}
          ref={setVideoEl}
        />
        <Button
          onClick={() => {
            captureBoth.capture();
            // canvasContext2d()?.drawImage(videoEl()!, 0, 0, 1500, 2000);
            // // cameraCapture.startCapture("user");
            // setCurrentCameraMode((p) =>
            //   p === "user" ? "environment" : "user"
            // );
          }}
        >
          Capture
        </Button>
        <Button
          onClick={() => {
            captureBoth.flip();
            // canvasContext2d()?.drawImage(videoEl()!, 0, 0, 1500, 2000);
            // // cameraCapture.startCapture("user");
            // setCurrentCameraMode((p) =>
            //   p === "user" ? "environment" : "user"
            // );
          }}
        >
          Flip
        </Button>
        <div>|||||||||front||||||||||</div>
        <img src={captureBoth.frontPictureUrl()} />
        <div>||||||||||back|||||||||</div>
        <img src={captureBoth.backPictureUrl()} />
        <div>|||||||||||||||||||</div>
        <canvas
          style={{ display: "none" }}
          width={1500}
          height={2000}
          ref={setCanvasEl}
        />
      </div>
    </Suspense>
  );
};

export default RealmojiUploadPage;
