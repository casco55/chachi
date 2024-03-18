import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LinkCard } from "../index";

export default {
  title: "Components/Cards/LinkCard",
  component: LinkCard,
  argTypes: {
    cardTitle: {
      name: "cardTitle",
      control: "text",
    },
    cardText: {
      name: "cardText",
      control: "text",
    },
    cardImg: {
      name: "cardImg",
      control: "text",
    },
    cardImgAlt: {
      name: "cardImgAlt",
      control: "text",
    },
    cardOnClick: {
      name: "cardOnClick",
      control: "text",
    },
    cardButtonText: {
      name: "cardButtonText",
      control: "text",
    },
  },
} as ComponentMeta<typeof LinkCard>;

const Template: ComponentStory<typeof LinkCard> = (args) => (
  <LinkCard {...args} />
);

export const Default = Template.bind({});
