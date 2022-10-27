import { createEffect, createSignal, Show } from "solid-js";
import { useUserToken } from "../userTokenProvider";
import { useLoginVerifyPhoneNumberMutation } from "../../openApiClients/berealWrapperQueries";
import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";
import Typography from "@suid/material/Typography";
import TextField from "@suid/material/TextField";
import { useNavigate, useParams } from "@solidjs/router";
import LoginPageLayout from "./loginPageLayout";

export const VerifyCodePage = () => {
  const { sessionInfo } = useParams();

  const [InputCode, setInputCode] = createSignal("");

  const userToken = useUserToken();

  const verifyPhoneNumberMutation = useLoginVerifyPhoneNumberMutation();

  createEffect(() => {
    if (!verifyPhoneNumberMutation.data) return;
    userToken.setToken(verifyPhoneNumberMutation.data.idToken);
    userToken.setRefreshToken(verifyPhoneNumberMutation.data.refreshToken);
  });

  const navigate = useNavigate();
  createEffect(() => {
    if (!verifyPhoneNumberMutation.isSuccess) return;
    navigate("/", { replace: true });
  });

  const handleCodeInput = (e: InputEvent) =>
    // @ts-expect-error
    setInputCode(e.target?.value ?? "");

  const handleSubmitCode = () => {
    if (InputCode().length > 4)
      verifyPhoneNumberMutation.mutate({
        sessionInfo,
        code: InputCode(),
      });
  };

  return (
    <LoginPageLayout>
      <Stack spacing={3} margin="1rem">
        <Typography variant="h3" alignSelf="center">
          Verify code
        </Typography>
        <TextField
          label="Verification code"
          helperText="Enter the code you received in SMS"
          type="text"
          onInput={handleCodeInput}
        />
        <Button
          disabled={verifyPhoneNumberMutation.isLoading}
          onClick={handleSubmitCode}
        >
          Verify code
        </Button>
        <Show when={verifyPhoneNumberMutation.isError}>
          <Typography color="text.secondary">
            {JSON.stringify(
              // @ts-expect-error
              verifyPhoneNumberMutation.error.error.error.message
            )}
          </Typography>
        </Show>
      </Stack>
    </LoginPageLayout>
  );
};

export default VerifyCodePage;
