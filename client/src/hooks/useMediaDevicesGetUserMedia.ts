import { createEffect, createSignal, onCleanup, untrack } from "solid-js";

// const useMediaDevices = () => {
//   const [mediaDevices, setMediaDevices] = createSignal<MediaDevices[]>();
//   const [isRequesting, setIsRequesting] = createSignal(false);

//   const start = () => {
//     setMediaDevices(undefined);
//     setIsRequesting(true);
//     navigator.mediaDevices
//       .enumerateDevices()
//       .then(setMediaDevices)
//       .finally(() => setIsRequesting(false));
//   };
//   return {
//     mediaDevices,
//     start,
//     isRequesting,
//   };
// };

export const useMediaDevicesGetUserMedia = <Err = unknown>() => {
  const [stream, setStream] = createSignal<MediaStream>();
  const [error, setError] = createSignal<Err>();
  const [isRequesting, setIsRequesting] = createSignal(false);

  createEffect(() => {
    if (!stream()) return;
    onCleanup(stopAllTracks);
  });

  const startCapture = (which: "user" | "environment") => {
    untrack(() => {
      stopCapture();
      setStream(undefined);
      setError(undefined);
      setIsRequesting(true);

      navigator.mediaDevices
        .getUserMedia({
          video: { facingMode: { exact: which } },
          audio: false,
        })
        .catch(async (err) => {
          if (err.name === "OverconstrainedError") {
            // alert(`err ${err}`);
          }
          console.log(
            `overconstrained error, user probably doesn't have "${which}" camera`,
            err
          );
          // For now let's fallback to not so strict mode
          return navigator.mediaDevices.getUserMedia({
            video: { facingMode: which, width: 1500, height: 2000 },
            audio: false,
          });
        })
        .then((s) => setStream(s))
        .catch(setError)
        .finally(() => setIsRequesting(false));
    });
  };

  const stopAllTracks = () => {
    stream()
      ?.getTracks()
      .forEach((s) => s.stop());
  };

  const stopCapture = () => {
    untrack(() => {
      stopAllTracks();
      setStream(undefined);
      setError(undefined);
    });
  };

  onCleanup(() => {
    stopCapture();
  });

  return {
    startCapture,
    stopCapture,
    stream,
    error,
    isRequesting,
  };
};
