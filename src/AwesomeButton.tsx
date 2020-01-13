import React from "react";

export interface AwesomeButtonProps {
  type: 'Awesome' | 'Cool' | 'Sup'
}

const AwesomeButton = (props: AwesomeButtonProps) => {
  return <div>{props.type}</div>
};

export default AwesomeButton
