import React from "react";
import { ComponentHistory, ComponentMeta } from "@storybook/react";
import { ServiceCard } from "./components/serviceCard";

export default {
  title: "Components/ServiceCard",
  component: ServiceCard,
  argTypes: {
    loading: {
      name: "loading",
      control: "text",
    },
    src: {
      name: "src",
      control: "text",
    },
    alt: {
      name: "alt",
      control: "text",
    },
    title: {
      name: "title",
      control: "text",
    },
    description: {
      name: "description",
      control: "text",
    },
    extraClass: {
      name: "extraClass",
      control: "text",
    },
  },
};

const Template = (args) => <ServiceCard {...args} />;

export const Default = Template.bind({});
