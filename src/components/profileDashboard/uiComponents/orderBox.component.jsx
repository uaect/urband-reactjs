import React, { Component } from "react";
const HeaderTypeOne = (props) => {
    return(
        <div>
            <div className="profileBoxTp1 mb-3">
                <div className="profileBoxHeader1">
                    <div className="OrderShowingBoxTp1">
                    <div>OrderId:&nbsp;{props.orderId} <span className="DateBoxTp1">Placed on Oct 30, 2019</span></div>
                        <div>See Detatils</div>
                    </div>
                </div>
                <div className="profileBoxContent">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default HeaderTypeOne;