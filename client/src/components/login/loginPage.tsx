import { createEffect, createSignal, Show } from "solid-js";
import { useLoginSendVerificationMutation } from "../../openApiClients/berealWrapperQueries";
import { useNavigate } from "@solidjs/router";
import LoginPageLayout from "./loginPageLayout";
import { Button, Heading, Input, Stack, Text, VStack } from "@hope-ui/solid";
import { useReactiveMutationProps } from "../../hooks/reactiveQuery";
import {
  useErrorToast,
  useLoadingToast,
  useSuccessToast,
} from "../../hooks/toasts";

const LoginPage = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = createSignal("");

  const verificationMutation = useLoginSendVerificationMutation();
  const { isSuccess, isLoading, isError } =
    useReactiveMutationProps(verificationMutation);
  useLoadingToast(isLoading, "Sending login verification...");
  useSuccessToast(isSuccess, "Login verification success");
  useErrorToast(isError, "Failed to send login verification");

  const handlePhoneInput = (e: InputEvent) =>
    // @ts-expect-error
    setInputPhoneNumber(e.target?.value ?? "");

  const handleSubmitPhoneVerification = () => {
    if (inputPhoneNumber().length > 5)
      verificationMutation.mutate({
        phoneNumber: inputPhoneNumber(),
      });
  };

  const navigate = useNavigate();

  createEffect(() => {
    if (verificationMutation.isSuccess)
      navigate(`/verifyCode/${verificationMutation.data?.sessionInfo}`, {
        replace: true,
      });
  });

  return (
    <LoginPageLayout>
      <VStack spacing={3} margin="1rem">
        <Heading>Login</Heading>
        <Input
          placeholder="Phone number, Format: +37012312312, you'll receive SMS with verification code"
          type="tel"
          onInput={handlePhoneInput}
        />
        <Button
          disabled={verificationMutation.isLoading}
          onClick={handleSubmitPhoneVerification}
        >
          Send code
        </Button>

        <Show when={verificationMutation.isError}>
          <Text>
            {
              // @ts-expect-error
              verificationMutation.error.error.error.message
            }
          </Text>
        </Show>
      </VStack>
    </LoginPageLayout>
  );
};

export default LoginPage;
