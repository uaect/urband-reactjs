import React from "react";
import RadioIcon from "../../../assets/img/radioButton.png";
const HeaderTypeOne = ({ HeaderText, SubHeaderText }) => {
  return (
    <div className="ListStyleTp1">
      <div className="row d-flex align-items-center">
        <div className="col-auto">
          <img src={RadioIcon} alt="" />
        </div>
        <div className="col-auto p-0">{HeaderText}</div>
        <div className="col-auto">:</div>
        <div className="col-auto p-0">{SubHeaderText}</div>
      </div>
    </div>
  );
};
export default HeaderTypeOne;
