import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "../index";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    accordionItems: {
      name: "accordionItems",
      control: "object",
    },
  },

} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});