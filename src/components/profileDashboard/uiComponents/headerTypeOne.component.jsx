import React from "react";
const HeaderTypeOne = ({ heading, subheading }) => {
  return (
    <div className="ProfileHeaderBoxTp1">
      <div className="txt1">{heading}</div>
      <div className="txt2">{subheading}</div>
    </div>
  );
};
export default HeaderTypeOne;
