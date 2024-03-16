import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "../../../style/styles.scss";
import "./selectInput.scss";
import { SelectOptions } from "../../../index";
import { useSelectInput } from "./hooks/useSelectInput";
import { selectInputOptions } from "./helpers/selectInput.helper";
import { SelectInputProps } from "../../interfaces/selectInput";

export const SelectInput = ({
  label = "Categoría",
  id = "this",
  name = "",
  selectedValue = "value5",
  setSelectedValue = (value: string) => {
    console.log(value);
  },
  placeholder = "placeholder",
  disabled = false,
  errorState = false,
  errorMessage = "Campo requerido",
  options = selectInputOptions,
}: SelectInputProps) => {
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
        {/* <Label label={label} fontWeight="bold" fontSize="6" className="mb-2" /> */}
        <div
          className={`border ${
            errorState && "border-danger"
          } rounded d-flex align-items-center border rounded`}
        >
          <input
            className={`input input--${
              disabled ? "disabled" : "controlled "
            } py-2 px-3 border-0 rounded`}
            type="text"
            placeholder={placeholder}
            value={inputText}
            onChange={handleInputChange}
            id={id}
            name={name}
            disabled={disabled}
          />
          <MdKeyboardArrowRight
            size={24}
            id={`arrow-${id}`}
            className="arrow cursor-pointer me-2"
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
          {/* <InputErrorLabel
            errorState={errorState}
            errorMessage={errorMessage}
            fontWeight="normal"
            fontSize="6"
            className="mt-1 d-flex align-items-center"
          /> */}
        </div>
      </div>
    </>
  );
};
