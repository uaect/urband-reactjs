import React, { Component } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeaderTypeOne = props => {
  return (
    <div>
      <div className="OrderStatusShowingBoxTp1">
        <div>Processing</div>
        <div>
          <div>
            <ul className="StatusNavigator clearfix">
              <li class="completed">
                <div className="StatusBox101">
                  <FontAwesomeIcon icon={faCheck} />
                  Ordered
                </div>
              </li>
              <li class="completed">
                <div className="StatusBox101">
                  <FontAwesomeIcon icon={faCheck} />
                  Processing
                </div>
              </li>
              <li>
                <div className="StatusBox101">
                  <FontAwesomeIcon icon={faCheck} />
                  shipped
                </div>
              </li>
              <li>
                <div className="StatusBox101">
                  <FontAwesomeIcon icon={faCheck} />
                  Delivered
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTypeOne;
