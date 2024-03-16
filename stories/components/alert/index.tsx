import React from "react";
import { AlertProps } from "../../interfaces/alertInterfaces";
import { CiLocationArrow1 } from "react-icons/ci";

export const Alert = ({
  text = "Primary",
  type = "primary",
  icon = <CiLocationArrow1 className="me-3" />,
}: AlertProps) => {
  return (
    <>
      <div
        className={`alert alert-${type} ${icon && "d-flex align-items-center"}`}
        role="alert"
      >
        {icon && icon} {text}
      </div>
    </>
  );
};
