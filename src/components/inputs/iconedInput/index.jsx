import { MdErrorOutline } from "react-icons/md";

export const IconedInput = ({
  inputLabel,
  inputName,
  inputId,
  inputValue,
  inputType,
  inputPlaceholder,
  icon,
  onChange,
  inputError,
  inputErrorMessage,
  inputClass,
}) => {
  return (
    <>
      <div className="col-12 d-flex flex-column">
        <label htmlFor="username">{inputLabel}:</label>
        <div className="d-flex flex-row col-12 position-relative">
          <div className="position-absolute top-0 bottom-0 d-flex justify-content-center align-items-center">
            {icon}
          </div>
          <input
            type={inputType}
            name={inputName}
            id={inputId}
            onChange={onChange}
            value={inputValue}
            placeholder={inputPlaceholder}
            className={`col-12 bg-transparent ps-4 py-2 ${inputClass}`}
          />
        </div>
        <span
          className={`text-danger mt-0 d-flex opacity-${inputError ? 100 : 0}`}
        >
          <MdErrorOutline className="my-auto me-1" size={20} />
          {inputErrorMessage}
        </span>
      </div>
    </>
  );
};
