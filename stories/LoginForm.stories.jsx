import React from "react";

import { LoginForm } from "./components/loginForm";

export default {
  title: "Components/LoginForm",
  component: LoginForm,
  argTypes: {},
};

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
