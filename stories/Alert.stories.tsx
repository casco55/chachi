import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "../index";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    text: {
      name: "text",
      control: "text",
    },
    type: {
      name: "type",
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ],
      },
    },
    icon: {
      name: "icon",
      control: "text",
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
