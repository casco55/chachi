import React from "react";
import { ComponentHistory, ComponentMeta } from "@storybook/react";
import { Text } from "./components/Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    text: {
      name: "text",
      control: "text",
    },
    fontType: {
      name: "fontType",
      control: "select",
      options: ["openSans", "ptSerif"],
    },
    fontsize: {
      name: "fontsize",
      control: "select",
      options: ["1", "2", "3", "4", "5", "6"],
    },
    fontWeight: {
      name: "fontWeight",
      control: "select",
      options: ["normal", "bold"],
    },

    tag: {
      name: "tag",
      control: "select",
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span"],
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
