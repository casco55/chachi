import React from "react";
import { Accordion } from "./components/accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
