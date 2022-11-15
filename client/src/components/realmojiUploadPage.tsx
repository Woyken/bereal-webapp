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
import { useMediaDevicesGetUserMedia } from "../hooks/useMediaDevicesGetUserMedia";
import { usePersonMeQuery } from "../openApiClients/berealWrapperQueries";

const RealmojiUploadPage = () => {
  // useRequireLogin();

  // const meQuery = usePersonMeQuery();

  const [activeEmoji, setActiveEmoji] = createSignal<string>();

  const cameraCapture = useMediaDevicesGetUserMedia();

  // Start back camera preview right the way
  const [currentCameraMode, setCurrentCameraMode] = createSignal<
    "environment" | "user"
  >("environment");

  createEffect(() => {
    const mode = currentCameraMode();
    console.log("start capture", mode);
    cameraCapture.startCapture(mode);
    onCleanup(() => {
      console.log('cleanup start capture')
    })
  });

  const [videoEl, setVideoEl] = createSignal<HTMLVideoElement>();
  const [canvasEl, setCanvasEl] = createSignal<HTMLCanvasElement>();
  const canvasContext2d = createMemo(() => canvasEl()?.getContext("2d"));

  createEffect(() => {
    const videoElement = videoEl();
    const cameraStream = cameraCapture.stream();
    if (!videoElement || !cameraStream) return;
    videoElement.srcObject = cameraStream;
    onCleanup(() => {
      videoElement.srcObject = null;
    });
  });

  return (
    <Suspense fallback={<Spinner />}>
      <Show when={cameraCapture.error()}>
        <Heading>{` ${cameraCapture.error()}`}</Heading>
      </Show>
      <Show when={cameraCapture.isRequesting()}>
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
        {`${cameraCapture.error()} ${cameraCapture.isRequesting()} ${cameraCapture.stream()}`}
        <video
          onClick={() => alert("test")}
          autoplay={true}
          style={{ background: "whitesmoke" }}
          ref={setVideoEl}
        />
        <Button
          onClick={() => {
            canvasContext2d()?.drawImage(videoEl()!, 0, 0, 1500, 2000);
            // cameraCapture.startCapture("user");
            setCurrentCameraMode((p) =>
              p === "user" ? "environment" : "user"
            );
          }}
        >
          Capture
        </Button>
        <canvas width={1500} height={2000} ref={setCanvasEl} />
      </div>
    </Suspense>
  );
};

export default RealmojiUploadPage;
