import React from "react";
const HeaderTypeOne = props => {
  return (
    <div>
      <div className="profileBoxTp1">
        <div className="profileBoxHeader1">{props.boxHeader}</div>
        <div className="profileBoxContent">{props.children}</div>
      </div>
    </div>
  );
};
export default HeaderTypeOne;
