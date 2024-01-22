import React from "react";
import "../../style/styles.scss";

export const Text = ({ text, fontType, fontsize, fontWeight, tag }) => {
  const TagType = tag || "p";
  return (
    <TagType
      className={`font--family--${fontType} font--size--${fontsize} font--weight--${fontWeight}`}
    >
      {text}
    </TagType>
  );
};
