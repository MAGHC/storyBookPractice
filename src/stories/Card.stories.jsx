import React from "react";
import { Card } from "../components/Card";

export default {
  title: "컴포넌트/Card",
  component: Card,
};

//{ frontlabel, backlabel, lifront, liback } 헷갈려서 프룹스 다적음

const Template = (args) => <Card {...args}></Card>;

export const Primary = Template.bind({});

Primary.args = {
  frontlabel: "앞",
  backlabel: "뒤",
  liback: "뒷면리스트",
  lifront: "앞면리스트",
};
