

import React, { Component } from "react";
import EmptyMessage from '../../../assets/img/profileDashbord.png';
const profileEntryBox = () => {

    return(
        <div className="MangeEmptyBox">
            <div className="MangeEmptyBoxContent text-center">
                <div>
                    <img src={EmptyMessage} alt=""/>
                    <div className="MangeEmptyBoxge101">Manage Your Orders, Profiles & Addresses</div>
                    <div className="MangeEmptyBoxge102">Need To Purchase Something ? Go Merchandise</div>
                    <a href="#" className="tim-btn mt-4 ticket-btn-lg place-order">Go to Products</a>
                </div>
            </div>
        </div>
    )
}
export default profileEntryBox;

