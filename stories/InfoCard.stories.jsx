import React from "react";

import { ComponentHistory, ComponentMeta } from "@storybook/react";
import { InfoCard } from "../index";

export default {
  title: "Components/InfoCard",
  component: InfoCard,
  argTypes: {
    extraClass: {
      name: "extraClass",
      control: "text",
    },
    vector: {
      name: "vector",
      control: "text",
    },
    items: {
      name: "items",
      control: "object",
    },
  },
};

const Template = (args) => <InfoCard {...args} />;

export const Default = Template.bind({});
