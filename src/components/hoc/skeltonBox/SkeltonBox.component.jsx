import React from "react";
const SkeltonBox = props => {
  const skeltonStyle = {
    width: props.width,
    height: props.height,
    borderRadius: props.curve
  };
  return <div className="skeltonBox" style={skeltonStyle}></div>;
};
export default SkeltonBox;
