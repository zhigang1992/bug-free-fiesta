import React from "react";
import {select, withKnobs} from "@storybook/addon-knobs";
import AwesomeButton, {AwesomeButtonProps} from "./AwesomeButton";

export default {
  title: "AwesomeButton",
  component: AwesomeButton,
  decorators: [withKnobs]
};

export const Single = () => {
  const type = select<AwesomeButtonProps['type']>(
    "Type",
    ['Awesome', 'Cool', 'Sup'],
    "Awesome"
  );
  return (
    <div className="flex">
      <AwesomeButton type={type}/>
    </div>
  );
};

export const Multiple = () => {
  const type = select<AwesomeButtonProps['type']>(
    "Type",
    ['Awesome', 'Cool', 'Sup'],
    "Cool"
  );
  return (
    <div className="flex">
      <AwesomeButton type={type}/>
    </div>
  );
};
