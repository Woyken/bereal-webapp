import { createSignal, Show } from "solid-js";
import { throwInline } from "../utils/throwInline";
import { useUserToken } from "./userTokenProvider";
import { useLoginSendVerificationMutation } from "../openApiClients/berealWrapperQueries";
import Box from "@suid/material/Box";
import Input from "@suid/material/Input";
import Button from "@suid/material/Button";

const TempLoginPage = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = createSignal("");

  const verificationMutation = useLoginSendVerificationMutation();

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
