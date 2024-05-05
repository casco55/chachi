import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TestimonyCoverflowSlider } from "../index";

export default {
  title: "Components/Slider/TestimonyCoverflowSlider",
  component: TestimonyCoverflowSlider,
  argTypes: {
    slideShadows: {
      name: "slideShadows",
      control: "boolean",
    },
  },
} as ComponentMeta<typeof TestimonyCoverflowSlider>;

const Template: ComponentStory<typeof TestimonyCoverflowSlider> = (args) => (
  <TestimonyCoverflowSlider {...args} />
);

export const Default = Template.bind({});
