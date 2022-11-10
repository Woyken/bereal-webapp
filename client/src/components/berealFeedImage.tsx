import { Box, Image, css, classNames } from "@hope-ui/solid";
import { createMemo, createSignal } from "solid-js";

type Props = {
  primaryUrl: string;
  secondaryUrl: string;
};

const feedImageStyles = css({
  "max-width": "40em",
  "transition-property": "all",
  "transition-duration": "0.2s",
  "transition-delay": "0s",
  "transition-timing-function": "cubic-bezier(.18,.89,.32,1.28)",
});

const topImageStyles = css({
  position: "absolute",
  top: 0,
  left: 0,
  "z-index": 1,
  transform: "scale(0.3)",
  "transform-origin": "0 0",
  margin: "3%",
  width: "100%",
  borderRadius: "$3xl"
});

const bottomImageStyles = css({
  width: "100%",
  borderRadius: "$lg",
});

const BerealFeedImage = (props: Props) => {
  const [isPrimaryOnTop, setIsPrimaryOnTop] = createSignal(false);
  const primaryStyle = createMemo(() =>
    isPrimaryOnTop() ? topImageStyles() : bottomImageStyles()
  );
  const secondaryStyle = createMemo(() =>
    isPrimaryOnTop() ? bottomImageStyles() : topImageStyles()
  );

  const handlePrimaryClick = () => {
    if (isPrimaryOnTop()) setIsPrimaryOnTop(false);
  };
  const handleSecondaryClick = () => {
    if (!isPrimaryOnTop()) setIsPrimaryOnTop(true);
  };

  return (
    <Box position="relative">
      <Image
        borderRadius="$lg"
        class={classNames(feedImageStyles(), primaryStyle())}
        src={props.primaryUrl}
        loading="lazy"
        onclick={handlePrimaryClick}
      />
      <Image
        class={classNames(feedImageStyles(), secondaryStyle())}
        src={props.secondaryUrl}
        loading="lazy"
        onclick={handleSecondaryClick}
      />
    </Box>
  );
};

export default BerealFeedImage;
