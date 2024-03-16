import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../index";

export default {
  title: "Components/Button",
  component: Button,
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
    outline: {
      name: "outline",
      control: "boolean",
    },
    onclick: {
      name: "onclick",
      control: "text",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
