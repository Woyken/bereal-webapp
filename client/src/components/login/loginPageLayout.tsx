import { Container } from "@hope-ui/solid";
import { ParentProps } from "solid-js";
import styles from "./loginPageLayout.module.css";

const LoginPageLayout = (props: ParentProps) => {
  return (
    <div class={styles["login-page-grid"]}>
      <Container class={styles["login-area"]}>{props.children}</Container>
    </div>
  );
};
export default LoginPageLayout;
