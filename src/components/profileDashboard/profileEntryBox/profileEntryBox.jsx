import React from "react";
import { Link } from "react-router-dom";
import EmptyMessage from "../../../assets/img/profileDashbord.png";
const profileEntryBox = () => {
  return (
    <div className="MangeEmptyBox">
      <div className="MangeEmptyBoxContent text-center">
        <div>
          <img src={EmptyMessage} alt="" />
          <div className="MangeEmptyBoxge101">
            Manage Your Orders, Profiles & Addresses
          </div>
          <div className="MangeEmptyBoxge102">
            Need To Purchase Something ? Go Merchandise
          </div>
          <Link className="tim-btn mt-4 ticket-btn-lg place-order" to="/store">
            Go to Products
          </Link>
        </div>
      </div>
    </div>
  );
};
export default profileEntryBox;
