import Paper from "@suid/material/Paper";
import { ParentProps } from "solid-js";
import styles from "./loginPageLayout.module.css";

const LoginPageLayout = (props: ParentProps) => {
  return (
    <div class={styles["login-page-grid"]}>
      <Paper class={styles["login-area"]}>{props.children}</Paper>
    </div>
  );
};
export default LoginPageLayout;
