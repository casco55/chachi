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
    if (showOptions) {
      document.getElementById(`arrow-${id}`).style.transform = "rotate(90deg)";
      return;
    }
    document.getElementById(`arrow-${id}`).style.transform = "rotate(0deg)";
  }, [showOptions]);
  useEffect(() => {
    setFilteredOptions(options);
    if (showOptions) {
      const currentlySelectedOption = document.getElementById(
        `option-${selectedOption}`
      );
      currentlySelectedOption.scrollIntoView({ block: "center" });
      return;
    }
  }, [showOptions]);
  useEffect(() => {
    if (selectedValue !== selectedOption) {
      setSelectedOption(selectedValue);
    }
  }, [selectedValue]);

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
  };
  useEffect(() => {
    if (!inputText) {
      setFilteredOptions(options);
      return;
    }
    setFilteredOptions(
      options.filter((option) =>
        option.text.toLowerCase().includes(inputText.toLowerCase())
      )
    );
  }, [inputText]);

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
