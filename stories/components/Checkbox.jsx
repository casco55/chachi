import React from "react";
import "../../style/styles.scss";

export const Checkbox = ({
  text = "lorem",
  id,
  name,
  fontFamily = "openSans",
  fontSize = "sm",
  isChecked = false,
  onChange = () => {
    console.log("onchange");
  },
}) => {
  return (
    <label
      className={`d-flex align-items-center font--family--${fontFamily} font--size--${fontSize}`}
    >
      <input
        className="me-2"
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={onChange}
      />
      {text}
    </label>
  );
};
