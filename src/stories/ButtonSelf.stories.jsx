import React from "react";

import { ButtonSelf } from "../components/ButtonSelf";

export default {
  title: "컴포넌트/ButtonSelf",
  component: ButtonSelf,
  parameters: {
    layout: "cetered",
  },
};

const Template = (args) => {
  <ButtonSelf {...args}></ButtonSelf>;
};

export const Primary = Template.bind({});

Primary.args = {};

export const Secondary = Template.bind({});

Secondary.args = {};

export const DarkMode = Template.bind({});

DarkMode.args = {
  mode: "darkmode",
};
