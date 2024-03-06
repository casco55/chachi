import "../../../style/styles.scss";
import { Label, InputErrorLabel } from "../../../index";

export const TextInput = ({
  label = "Nombre",
  id = "this",
  name = "",
  value = "Juan",
  placeholder = "placeholder",
  onChange = () => {},
  onKeyPress = () => {},
  disabled = false,
  errorState = false,
  errorMessage = "Campo requerido",
  maxLength = 300,
}) => {
  return (
    <>
      <div className="d-flex flex-column col-12">
        <Label label={label} fontWeight="bold" fontSize="6" className="mb-2" />
        <input
          className={`input input--${
            disabled ? "disabled" : "controlled "
          } py-2 px-3 border rounded ${errorState && "border-danger"}`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          id={id}
          name={name}
          disabled={disabled}
          maxLength={maxLength}
        />
        <InputErrorLabel
          errorState={errorState}
          errorMessage={errorMessage}
          fontWeight="normal"
          fontSize="6"
          className="mt-1 d-flex align-items-center"
        />
      </div>
    </>
  );
};
