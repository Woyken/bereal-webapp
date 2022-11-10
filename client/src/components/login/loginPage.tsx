import { createEffect, createSignal, Show } from "solid-js";
import { useLoginSendVerificationMutation } from "../../openApiClients/berealWrapperQueries";
import { useNavigate } from "@solidjs/router";
import LoginPageLayout from "./loginPageLayout";
import { Button, Input, Stack, Text } from "@hope-ui/solid";

const LoginPage = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = createSignal("");

  const verificationMutation = useLoginSendVerificationMutation();

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
      <Stack spacing={3} margin="1rem">
        <Text as="h3" alignSelf="center">
          Login
        </Text>
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
          <Text color="text.secondary">
            {
              // @ts-expect-error
              verificationMutation.error.error.error.message
            }
          </Text>
        </Show>
      </Stack>
    </LoginPageLayout>
  );
};

export default LoginPage;
