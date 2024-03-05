import { VscError } from "react-icons/vsc";

export const InputErrorLabel = ({
  errorState = false,
  errorMessage = "Campo requerido",
  fontWeight = "normal",
  fontSize = "6",
  className = "",
}) => {
  return (
    <>
      <label
        className={`font-weight-${fontWeight} fs-${fontSize} ${className} text-danger ${
          errorState ? "opacity-100" : "opacity-0"
        }`}
      >
        <VscError className="me-1" />
        {errorMessage}
      </label>
    </>
  );
};
