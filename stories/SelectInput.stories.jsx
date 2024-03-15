import React from "react";
import { SelectInput } from "../index";

export default {
  title: "Components/SelectInput",
  component: SelectInput,
  argTypes: {
    label: {
      name: "label",
      control: "text",
    },
    id: {
      name: "id",
      control: "text",
    },
    name: {
      name: "name",
      control: "text",
    },
    inputValue: {
      name: "inputValue",
      control: "text",
    },
    selectedValue: {
      name: "selectedValue",
      control: "text",
    },
    placeholder: {
      name: "placeholder",
      control: "text",
    },
    disabled: {
      name: "disabled",
      control: "boolean",
    },
    errorState: {
      name: "errorState",
      control: "boolean",
    },
    errorMessage: {
      name: "errorMessage",
      control: "text",
    },
    fontFamily: {
      name: "fontFamily",
      control: "text",
    },
    options: {
      name: "options",
      control: "array",
    },
    onInputChange: {
      name: "onInputChange",
      control: "function",
    },
    onSelect: {
      name: "onSelect",
      control: "function",
    },
    xl: {
      name: "xl",
      control: "number",
    },
    lg: {
      name: "lg",
      control: "number",
    },
    md: {
      name: "md",
      control: "number",
    },
    sm: {
      name: "sm",
      control: "number",
    },
    xs: {
      name: "xs",
      control: "number",
    },
  },
};

const Template = (args) => <SelectInput {...args} />;

export const Default = Template.bind({});
