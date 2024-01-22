import { useEffect, useRef, useState } from "react";
import { Column } from "../Column";
import { MdErrorOutline } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./selectInput.scss";

export const SelectInput = ({
  label = "label",
  id = "this",
  name = "",
  inputValue = "",
  selectedValue = "",
  placeholder = "placeholder",
  disabled = false,
  errorState = false,
  errorMessage = "Campo requerido",
  fontFamily = "openSans",
  options = [],
  onInputChange = () => {},
  onSelect = () => {},
  xl = 12,
  lg = 12,
  md = 12,
  sm = 12,
  xs = 12,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    if (showOptions) {
      document.getElementById(`arrow-${id}`).style.transform = "rotate(90deg)";
      return;
    }
    document.getElementById(`arrow-${id}`).style.transform = "rotate(0deg)";
  }, [showOptions]);
  return (
    <>
      <Column xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
        <label className="mb-1 font--weight--bold font--size--sm ">
          {label}
        </label>
        <div
          className={`border ${
            errorState ? "border-danger" : ""
          } rounded px-2 py-1 d-flex align-items-center input-container ${
            disabled ? "input--disabled" : ""
          }`}
        >
          <input
            className={`input--controlled ${disabled ? "input--disabled" : ""}`}
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={onInputChange}
            id={id}
            name={name}
            disabled={disabled}
          />
          {errorState && (
            <MdErrorOutline className="ms-auto me-0 text-danger" />
          )}
          <MdKeyboardArrowRight
            size={20}
            id={`arrow-${id}`}
            className="arrow"
            onClick={() => setShowOptions(!showOptions)}
          />
        </div>
        <div className="d-flex flex-column position-relative">
          {showOptions && (
            <div
              className="d-flex flex-column position-absolute col-12 bg-light"
              id="options"
            >
              <div className="bg-info col-12 p-2">a</div>
              <div className="bg-info col-12 p-2">a</div>
              <div className="bg-info col-12 p-2">a</div>
            </div>
          )}
          <label
            className={`font--size--xs text-danger mt-1 ${
              errorState ? "opacity-100" : "opacity-0"
            }`}
          >
            {errorMessage}
          </label>
        </div>
      </Column>
    </>
  );
};
