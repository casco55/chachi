export interface SelectOptionProps {
  value: string;
  text: string;
  key?: string;
}

export interface SelectOptionsProps {
  selectedOption: string;
  handleSelectOption: (value: string) => void;
  filteredOptions: SelectOptionProps[];
}
