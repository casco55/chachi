import { Column } from "../Column";
import { MdErrorOutline } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import "../../../style/styles.scss";
import "./selectInput.scss";
import { useSelectInput } from "./useSelectInput";

export const SelectInput = ({
  label = "label",
  id = "this",
  name = "this",
  selectedValue = "value5",
  setSelectedValue = (value) => {
    console.log(value);
  },
  placeholder = "placeholder",
  disabled = false,
  errorState = false,
  errorMessage = "Campo requerido",
  fontFamily = "openSans",
  options = [
    {
      value: "value",
      text: "text",
    },
    {
      value: "value2",
      text: "text2",
    },
    {
      value: "value3",
      text: "text3",
    },
    {
      value: "value4",
      text: "text4",
    },
    {
      value: "value5",
      text: "text5",
    },
    {
      value: "value6",
      text: "text6",
    },
    {
      value: "value7",
      text: "text7",
    },
    {
      value: "value8",
      text: "text8",
    },
    {
      value: "value9",
      text: "text9",
    },
  ],
  xl = 12,
  lg = 12,
  md = 12,
  sm = 12,
  xs = 12,
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
            type="text"
            placeholder={placeholder}
            value={inputText}
            onChange={handleInputChange}
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
            className="arrow cursor-pointer"
            onClick={handleDisplayOptions}
          />
        </div>
        <div className="d-flex flex-column position-relative  option-container z-index-10">
          {showOptions && (
            <>
              <div className="position-absolute col-12 bg-white" id="options">
                <div
                  className="d-flex flex-column col-12 option-container overflow-y-auto"
                  id="options"
                >
                  {filteredOptions.map(({ value, text, key }) => (
                    <div
                      key={key}
                      className={`col-12 p-2 border-bottom cursor-pointer option-item  ${
                        selectedOption === value ? "bg-primary text-white" : ""
                      }`}
                      id={`option-${value}`}
                      onClick={() => handleSelectOption(value)}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </>
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
