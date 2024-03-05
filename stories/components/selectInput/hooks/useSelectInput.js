import { useEffect, useState } from "react";

export const useSelectInput = ({
  id,
  selectedValue,
  options,
  setSelectedValue,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [inputText, setInputText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState(selectedValue);
  useEffect(() => {
    if (showOptions && inputText) {
      document.getElementById(`arrow-${id}`).style.transform = "rotate(90deg)";
      const selectedOptionElement = document.getElementById(selectedOption);
      if (selectedOptionElement) {
        selectedOptionElement.scrollIntoView({
          block: "center",
        });
      }
      return;
    }
    document.getElementById(`arrow-${id}`).style.transform = "rotate(0deg)";
    setFilteredOptions(options);
  }, [showOptions, inputText]);

  useEffect(() => {
    if (selectedOption && filteredOptions) {
      setInputText(
        filteredOptions.find((option) => option.value === selectedOption).text
      );
    }
  }, [selectedOption]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setShowOptions(true);
    setFilteredOptions(
      options.filter((option) =>
        option.text.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleSelectOption = (value) => {
    setInputText(options.find((option) => option.value === value).text);
    setSelectedOption(value);
    setShowOptions(false);
    setSelectedValue(value);
  };

  const handleDisplayOptions = () => {
    setShowOptions(!showOptions);
  };
  return {
    inputText,
    showOptions,
    filteredOptions,
    selectedOption,
    handleDisplayOptions,
    handleInputChange,
    handleSelectOption,
  };
};
