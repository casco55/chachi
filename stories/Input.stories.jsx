import React from "react";
import { ComponentHistory, ComponentMeta } from "@storybook/react";
import { Input } from "./components/Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      name: "type",
      control: "select",
      options: ["text", "number"],
    },
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
      control: "text",
    },
    onKeyDown: {
      name: "onKeyDown",
      control: "text",
    },
    maxLength: {
      name: "maxLength",
      control: "number",
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
      control: "select",
      options: ["openSans", "ptSerif"],
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

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
