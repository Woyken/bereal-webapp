import { createMutation } from "@tanstack/solid-query";
import envConfig from "../envConfig";
import { Accessor, createSignal, Show } from "solid-js";
import { Box, Button, Input } from "@hope-ui/core";
import { throwInline } from "../utils/throwInline";
import { useUserToken } from "./userTokenProvider";

type SendVerificationCodeResponse = {
  sessionInfo: string;
};

const useSendVerificationMutation = () => {
  return createMutation(async ({ phoneNumber }: { phoneNumber: string }) => {
    const response = await fetch(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/sendVerificationCode?key=${envConfig.loginKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          phoneNumber,
          iosReceipt: envConfig.iosReceipt,
        }),
        headers: {
          "x-ios-bundle-identifier": envConfig.iosBundleId,
        },
      }
    );
    return (await response.json()) as SendVerificationCodeResponse;
  });
};

const TempLoginPage = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = createSignal("");

  const verificationMutation = useSendVerificationMutation();

  const handlePhoneInput = (e: InputEvent) =>
  // @ts-expect-error
    setInputPhoneNumber(e.target?.value ?? "");

  const handleSubmitPhoneVerification = () => {
    verificationMutation.mutate({
      phoneNumber: inputPhoneNumber(),
    });
  };

  const [InputCode, setInputCode] = createSignal("");

  const userToken = useUserToken();

  const handleCodeInput = (e: InputEvent) =>
  // @ts-expect-error
    setInputCode(e.target?.value ?? "");

  const handleSubmitCode = () => {
    userToken.setTokenFromVerificationCode({
      sessionInfo:
        verificationMutation.data?.sessionInfo ??
        throwInline(new Error("session info not yet received")),
      code: InputCode(),
    });
  };

  return (
    <Box>
      <Show when={verificationMutation.isIdle}>
        <Input type="tel" onInput={handlePhoneInput} />
        <Button onClick={handleSubmitPhoneVerification}>Send code</Button>
      </Show>
      <Show when={verificationMutation.isSuccess}>
        <Input type="text" onInput={handleCodeInput} />
        <Button onClick={handleSubmitCode}>Verify code</Button>
      </Show>
    </Box>
  );
};

export default TempLoginPage;
