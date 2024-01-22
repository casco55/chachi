import React from "react";
import { ComponentHistory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    text: {
      name: "text",
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
    checked: {
      name: "checked",
      control: "boolean",
    },
    onchange: {
      name: "onchange",
      control: "function",
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
