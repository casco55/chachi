export const SelectOptions = ({
  selectedOption,
  handleSelectOption,
  filteredOptions,
}) => {
  return (
    <>
      <div className="position-absolute col-12 bg-white" id="options">
        <div
          className="d-flex flex-column col-12 option-container overflow-y-auto"
          id="options"
        >
          {filteredOptions.map(({ value, text, key }) => (
            <div
              key={`${key}-${value}`}
              className={`col-12 p-2 border-bottom cursor-pointer option-item  ${
                selectedOption === value ? "bg-primary text-white" : ""
              }`}
              id={value}
              onClick={() => handleSelectOption(value)}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};