import React from "react";
import { Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faBreadSlice,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import ProfileEntryBox from "./profileEntryBox/profileEntryBox";
import profileData from "./profileData/profileData";
import profileOrders from "./profileOrders/profileOrders";
import profileAddress from "./profileAddresses/profileAddresses";
import { Redirect } from "react-router-dom";
const ProfileDashboard = ({ match }) => {
  var userData = JSON.parse(localStorage.getItem("urbandData"));
  if (!userData) {
    return <Redirect push to="/" />;
  }
  return (
    <div>
      <div className="profileDashBoardBox">
        <div>
          <div className="container clearfix">
            <div className="ProfileBoardContent">
              <div className="DsplayFlexBoxTp1">
                <div className="LftBox">
                  <div>
                    <div className="lftPrfDesc1">
                      <div className="DescTxtTp1">{userData.name}</div>
                      <div className="DescTxtTp2">
                        {" "}
                        {/*<Link to="/logout">Sign Out</Link>*/}
                      </div>
                    </div>
                    <div className="PrfLinkBoxTp1">
                      <div className="ProfileNavItem">
                        <NavLink
                          to={`${match.url}/profileData`}
                          activeClassName="selected"
                        >
                          <FontAwesomeIcon
                            icon={faUserAlt}
                            className="prfIcnTp1"
                          />
                          <span>Profile</span>
                        </NavLink>
                      </div>
                      <div className="ProfileNavItem">
                        <NavLink
                          to={`${match.url}/profileAddress`}
                          activeClassName="selected"
                        >
                          <FontAwesomeIcon
                            icon={faBreadSlice}
                            className="prfIcnTp1"
                          />
                          <span>Addresses</span>
                        </NavLink>
                      </div>
                      <div className="ProfileNavItem">
                        <NavLink
                          to={`${match.url}/profileOrders`}
                          activeClassName="selected"
                        >
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="prfIcnTp1"
                          />
                          <span>Orders</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="RgtBox pl-4 pt-3">
                  <div className="maxWidth1200">
                    <Route
                      exact
                      path={`${match.path}`}
                      render={ProfileEntryBox}
                    />
                    <Route
                      path={`${match.path}/profileData`}
                      render={profileData}
                    />
                    <Route
                      path={`${match.path}/profileOrders`}
                      render={profileOrders}
                    />
                    <Route
                      path={`${match.path}/profileAddress`}
                      render={profileAddress}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileDashboard;
// import React from 'react';
// import { Link, Route } from 'react-router-dom';

// const Category = ({ match }) => {
// return( <div> <ul>
//     <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
//     <li><Link to={`${match.url}/boots`}>Boots</Link></li>
//     <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>

//   </ul>

//   </div>)
// }
// export default Category;
