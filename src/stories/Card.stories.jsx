import React from "react";
import { Card } from "../components/Card";

export default {
  title: "컴포넌트/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Card {...args}></Card>;

export const Primary = Template.bind({});

Primary.args = {
  frontlabel: "앞",
  backlabel: "뒤",
};
