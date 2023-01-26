import { CreateMutationResult } from "@tanstack/solid-query";

export const useReactiveMutationProps = <
  TData = unknown,
  TError = unknown,
  TVariables = unknown,
  TContext = unknown
>(
  mutation: CreateMutationResult<TData, TError, TVariables, TContext>
) => {
  return {
    isSuccess: () => mutation.isSuccess,
    isError: () => mutation.isError,
    isLoading: () => mutation.isLoading,
    isIdle: () => mutation.isIdle,
    isPaused: () => mutation.isPaused,
    data: () => mutation.data,
    error: () => mutation.error,
    status: () => mutation.status,
  };
};
