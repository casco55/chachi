import React from "react";
import { ComponentHistory, ComponentMeta } from "@storybook/react";
import { ProductCard } from "./components/productCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  argTypes: {
    title: {
      name: "title",
      control: "text",
    },
    description: {
      name: "description",
      control: "text",
    },
    price: {
      name: "price",
      control: "text",
    },
    quantity: {
      name: "quantity",
      control: "number",
    },
    addProduct: {
      name: "addProduct",
      control: "function",
    },
    subtractButton: {
      name: "subtractButton",
      control: "function",
    },
  },
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
