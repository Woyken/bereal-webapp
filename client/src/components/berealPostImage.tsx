import clsx from "clsx";
import { createMemo, createSignal } from "solid-js";
import styles from "./berealPostImage.module.css";

type Props = {
  primaryUrl: string;
  secondaryUrl: string;
};

const BerealFeedImage = (props: Props) => {
  const [isPrimaryOnTop, setIsPrimaryOnTop] = createSignal(false);
  const primaryStyle = createMemo(
    () => styles[isPrimaryOnTop() ? "top-image" : "bottom-image"]
  );
  const secondaryStyle = createMemo(
    () => styles[isPrimaryOnTop() ? "bottom-image" : "top-image"]
  );

  const handlePrimaryClick = () => {
    if (isPrimaryOnTop()) setIsPrimaryOnTop(false);
  };
  const handleSecondaryClick = () => {
    if (!isPrimaryOnTop()) setIsPrimaryOnTop(true);
  };

  return (
    <div class={styles["relative-wrapper"]}>
      <img
        class={clsx(styles["feed-image"], primaryStyle())}
        src={props.primaryUrl}
        loading="lazy"
        onclick={handlePrimaryClick}
      />
      <img
        class={clsx(styles["feed-image"], secondaryStyle())}
        src={props.secondaryUrl}
        loading="lazy"
        onclick={handleSecondaryClick}
      />
    </div>
  );
};

export default BerealFeedImage;
