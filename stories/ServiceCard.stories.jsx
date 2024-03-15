import React from "react";
import { ServiceCard } from "../index";

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
