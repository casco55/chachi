import { MdKeyboardArrowRight } from "react-icons/md";
import "../../../style/styles.scss";
import "./selectInput.scss";
import { useSelectInput } from "./hooks/useSelectInput";
import { selectInputOptions } from "./helpers/selectInput.helper";
import { Label, InputErrorLabel, SelectOptions } from "../../../index";

export const SelectInput = ({
  label = "Categoría",
  id = "this",
  name = "",
  selectedValue = "value5",
  setSelectedValue = (value) => {
    console.log(value);
  },
  placeholder = "placeholder",
  disabled = false,
  errorState = false,
  errorMessage = "Campo requerido",
  options = selectInputOptions,
}) => {
  const {
    inputText,
    showOptions,
    filteredOptions,
    selectedOption,
    handleDisplayOptions,
    handleInputChange,
    handleSelectOption,
  } = useSelectInput({
    id,
    selectedValue,
    options,
    setSelectedValue,
  });
  return (
    <>
      <div className="d-flex flex-column col-12">
        <Label label={label} fontWeight="bold" fontSize="6" className="mb-2" />
        <div
          className={`border ${
            errorState ? "border-danger" : ""
          } rounded px-2 py-1 d-flex align-items-center input-container ${
            disabled ? "input--disabled" : ""
          }`}
        >
          <input
            className={`input input--${disabled ? "disabled" : "controlled"}`}
            type="text"
            placeholder={placeholder}
            value={inputText}
            onChange={handleInputChange}
            id={id}
            name={name}
            disabled={disabled}
          />
          <MdKeyboardArrowRight
            size={20}
            id={`arrow-${id}`}
            className="arrow cursor-pointer"
            onClick={!disabled ? handleDisplayOptions : () => {}}
          />
        </div>
        <div className="d-flex flex-column position-relative option-container z-index-10">
          {showOptions && (
            <SelectOptions
              selectedOption={selectedOption}
              handleSelectOption={handleSelectOption}
              filteredOptions={filteredOptions}
            />
          )}
          <InputErrorLabel
            errorState={errorState}
            errorMessage={errorMessage}
            fontWeight="normal"
            fontSize="6"
            className="mt-1 d-flex align-items-center"
          />
        </div>
      </div>
    </>
  );
};
