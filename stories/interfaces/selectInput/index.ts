import { SelectOptionProps } from "../selectInterfaces";

export interface SelectInputProps {
  label?: string;
  id?: string;
  name?: string;
  selectedValue?: string;
  setSelectedValue?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  errorState?: boolean;
  errorMessage?: string;
  options?: SelectOptionProps[];
}
