import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserAlt, faCartPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../header/header.component.css";
import Logo from "../../assets/img/logo_5.png";
import BurgerMenu from "../header/burgerMenu.component";

library.add(faUserAlt, faCartPlus);

class Header extends Component {
  state = {
    log: ""
  }

  gotologout = () => {
    console.log("tttttttt");
    localStorage.removeItem('urbandtoken');
    // this.setState({ log: "Log Out" });
 

  }
  render() {
    var token = (localStorage.getItem('urbandtoken'))
    console.log("headerpage", token)
    if (!token) {
      // this.setState({ log: "Log In" });
    } else {
      // this.setState({ log: "Log Out" });
    }
    return (
      <div className="AppHeader">
        <header className="header header-magic-line headroom headroom--not-bottom headroom--pinned headroom--top">
          <div className="tim-container clearfix">
            <div className="header-magic-line-inner clearfix d-flex full-wrap">
              <div id="site-logo" className="float-left">
                <NavLink to="/" className="logo-main">
                  <img src={Logo} alt="hero urband" />
                </NavLink>
              </div>
              <div className="d-flex full-wrap nav-wrap">
                <div className="nav">
                  <ul className="group" id="header-menu-magic-line">
                    <li>
                      <NavLink
                        to="/index"
                        activeClassName="selected"
                        className="in-array"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children in-array">
                      Studio
                      <ul className="sub-menu">
                        <li>
                          <Link to="/artist">Artists</Link>
                        </li>
                        <li>
                          <Link to="/clients">Clients</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/radio"
                        className="in-array"
                        activeClassName="selected"
                      >
                        Radio
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink
                        to="/event-list"
                        activeClassName="selected"
                        className="in-array"
                      >
                        Events
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/who-we-are"
                        activeClassName="selected"
                        className="in-array"
                      >
                        About
                      </NavLink>
                    </li>

                    <li>
                      <NavLink exact to="/vlog" className="in-array">
                        Vlog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/gallery"
                        activeClassName="selected"
                        className="in-array"
                      >
                        Gallery
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children in-array">
                      Purchase
                      <ul className="sub-menu">
                        <li>
                          <Link to="/event-tickets">Event Tickets</Link>
                        </li>
                        <li>
                          <Link to="/coming-soon">Studio Bookings</Link>
                        </li>
                        <li>
                          <Link to="/store">Merchandise</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="in-array"
                        activeClassName="selected"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <ul className="d-inline-flex avathar-sec">
                  <li className="d-flex mr-4">
                    {!token ? <Link to="/login">
                      <span>Log In</span>
                      <FontAwesomeIcon
                        icon={faUserAlt}
                        className="ico-user"
                      />
                    </Link> : ""}
                    {token ? <Link onClick={this.gotologout}>
                      <span>Log Out</span>
                      <FontAwesomeIcon
                        icon={faUserAlt}
                        className="ico-user"
                      />
                    </Link> : ""}

                  </li>
                  <li className="d-flex">
                    <Link to="/cart">
                      <span>Cart</span>
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        className="ico-user"
                      />
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </header>
        <BurgerMenu />
      </div>
    );
  }
}

export default Header;
