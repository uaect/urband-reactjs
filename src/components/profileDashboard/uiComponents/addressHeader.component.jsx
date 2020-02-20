import React from "react";
import Icon from "../../../assets/img/set_from_map.png";
const AddressRow = ({ addressType }) => {
  return (
    <div>
      <div className="HdrTp101">
        <img src={Icon} alt="" />
        {addressType}
      </div>
    </div>
  );
};
export default AddressRow;
