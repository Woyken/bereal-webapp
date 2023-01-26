import { Accessor, createEffect, onCleanup } from "solid-js";
import toast, { Message, ToastOptions } from "solid-toast";

export const useSuccessToast = (
  condition: Accessor<boolean>,
  message: Message,
  options?: ToastOptions
) => {
  createEffect(() => {
    if (!condition()) return;
    const toastId = toast.success(message, options);
    onCleanup(() => toast.dismiss(toastId));
  });
};

export const useErrorToast = (
  condition: Accessor<boolean>,
  message: Message,
  options?: ToastOptions
) => {
  createEffect(() => {
    if (!condition()) return;
    const toastId = toast.error(message, options);
    onCleanup(() => toast.dismiss(toastId));
  });
};

export const useLoadingToast = (
  condition: Accessor<boolean>,
  message: Message,
  options?: ToastOptions
) => {
  createEffect(() => {
    if (!condition()) return;
    const toastId = toast.loading(message, options);
    onCleanup(() => toast.dismiss(toastId));
  });
};
