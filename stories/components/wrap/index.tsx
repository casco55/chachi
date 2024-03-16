import React from "react";
import { flexBoxProps } from "../../interfaces/flexBoxInterfaces";
export const Wrap = ({
  xl = 12,
  lg = 12,
  md = 12,
  sm = 12,
  xs = 12,
  extraClass = "",
  children,
}: flexBoxProps) => {
  return (
    <div
      className={`col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm} col-${xs} d-flex flex-wrap ${extraClass}`}
    >
      {children}
    </div>
  );
};
