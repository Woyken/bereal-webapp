import { createEffect, createSignal, Show } from "solid-js";
import { useLoginSendVerificationMutation } from "../../openApiClients/berealWrapperQueries";
import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import TextField from "@suid/material/TextField";
import { useNavigate } from "@solidjs/router";
import LoginPageLayout from "./loginPageLayout";

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
        <Typography variant="h3" alignSelf="center">
          Login
        </Typography>
        <TextField
          label="Phone number"
          helperText="Format: +37012312312, you'll receive SMS with verification code"
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
          <Typography color="text.secondary">
            {
              // @ts-expect-error
              verificationMutation.error.error.error.message
            }
          </Typography>
        </Show>
      </Stack>
    </LoginPageLayout>
  );
};

export default LoginPage;
