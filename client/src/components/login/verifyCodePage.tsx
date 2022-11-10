import { createEffect, createSignal, Show } from "solid-js";
import { useUserToken } from "../userTokenProvider";
import { useLoginVerifyPhoneNumberMutation } from "../../openApiClients/berealWrapperQueries";
import { useNavigate, useParams } from "@solidjs/router";
import LoginPageLayout from "./loginPageLayout";
import { Button, Heading, Input, Stack, Text, VStack } from "@hope-ui/solid";

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
      <VStack spacing={3} margin="1rem">
        <Heading>
          Verify code
        </Heading>
        <Input
          placeholder="Enter the verification code you received in SMS"
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
          <Text>
            {JSON.stringify(
              // @ts-expect-error
              verifyPhoneNumberMutation.error.error.error.message
            )}
          </Text>
        </Show>
      </VStack>
    </LoginPageLayout>
  );
};

export default VerifyCodePage;
