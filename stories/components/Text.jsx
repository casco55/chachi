import React from "react";
import "../../style/styles.scss";

export const Text = ({
  text = "lorem ipsum dolor sit amet",
  fontType = "openSans",
  fontsize = "6",
  fontWeight = "normal",
  tag,
}) => {
  const TagType = tag || "p";
  return (
    <TagType
      className={`font--family--${fontType} fs-${fontsize} fw-${fontWeight}`}
    >
      {text}
    </TagType>
  );
};
