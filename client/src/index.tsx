import { render } from "solid-js/web";
import { css, CSSProperties, LinariaClassName } from "@linaria/core";
import App from "./app";

const bodyStyle = css`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;
document.body.className = bodyStyle;

render(() => <App />, document.getElementById("root") as HTMLElement);
