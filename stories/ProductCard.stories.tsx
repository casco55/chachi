import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductCard } from "../index";

export default {
  title: "Components/Cards/ProductCard",
  component: ProductCard,
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
    productQuantity: {
      name: "productQuantity",
      control: "number",
    },
    productPrice: {
      name: "productPrice",
      control: "text",
    },
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
