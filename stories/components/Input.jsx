import { ErrorIcon } from "../../assets/icons/ErrorIcon";
import { Column } from "./Column";

export const Input = ({
  type = "text",
  label = "label",
  id = "",
  name = "",
  value = "",
  placeholder = "placeholder",
  onChange = () => {},
  onKeyDown = () => {},
  maxLength,
  disabled = false,
  errorState = false,
  errorMessage = "Campo requerido",
  fontFamily = "openSans",
  xl = 12,
  lg = 12,
  md = 12,
  sm = 12,
  xs = 12,
}) => {
  return (
    <>
      <Column
        xl={xl}
        lg={lg}
        md={md}
        sm={sm}
        xs={xs}
        extraClass={`font--family--${fontFamily}`}
      >
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
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            id={id}
            name={name}
            maxLength={maxLength}
            disabled={disabled}
          />
          {errorState && <ErrorIcon className="ms-auto me-0" />}
        </div>

        <label
          className={`font--size--xs text-danger mt-1 ${
            errorState ? "opacity-100" : "opacity-0"
          }`}
        >
          {errorMessage}
        </label>
      </Column>
    </>
  );
};
