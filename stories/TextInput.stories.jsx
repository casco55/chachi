import React from "react";
import { TextInput } from "../index";

export default {
  title: "Components/TextInput",
  component: TextInput,
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
    value: {
      name: "value",
      control: "text",
    },
    placeholder: {
      name: "placeholder",
      control: "text",
    },
    onChange: {
      name: "onChange",
      control: "function",
    },
    onKeyPress: {
      name: "onKeyPress",
      control: "function",
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
    maxLength: {
      name: "maxLength",
      control: "number",
    },
  },
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
