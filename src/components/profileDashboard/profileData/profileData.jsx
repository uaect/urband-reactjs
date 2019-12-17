import React, { Component } from "react";
import HeaderTypeOne from "../uiComponents/headerTypeOne.component";
import BoxTypeOne from "../uiComponents/BoxTypeOne.component";
import ProfileBox from '../uiComponents/profileBox.component';
const ProfileData = () => {
  return (
    <div>
      <div className="HdrBxc1 positionRelativeBox">
        <HeaderTypeOne heading="Profile" subheading="General Informaton" />
      </div>
      <div className="AddressBoxTpWrp mb-2">
        <div>
          <BoxTypeOne boxHeader="General Information">
            <div>
              
              <ProfileBox/>
            </div>
          </BoxTypeOne>
        </div>
      </div>
    </div>
  );
};
export default ProfileData;
