import React from "react";
const AddressRow = props => {
  return (
    <div>
      <div>
        <div className="addressColumnBox">
          <div>{props.textType1}</div>
          <div>{props.textType2}</div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};
export default AddressRow;
