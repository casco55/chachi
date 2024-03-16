import React from "react";
import { ButtonProps } from "../../interfaces/buttonInterfaces";

export const Button = ({
  text = "Primary",
  type = "primary",
  outline = false,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <>
      <button
        className={`btn btn-${outline ? "outline-" : ""}${type}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
