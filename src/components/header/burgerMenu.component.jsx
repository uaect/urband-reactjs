import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faAngleDown);

class burgerMenu extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      childVisible: false
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  onclickStepHandler(step) {
    this.setState({ childVisible: step });
  }
  render() {
    var styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        right: "36px",
        top: "36px"
      },
      bmBurgerBars: {
        background: "#373a47"
      },
      bmBurgerBarsHover: {
        background: "#a90000"
      },
      bmCrossButton: {
        height: "24px",
        width: "24px"
      },
      bmCross: {
        background: "#bdc3c7"
      },
      bmMenuWrap: {
        position: "fixed",
        height: "100%"
      },
      bmMenu: {
        background: "rgb(0, 0, 0)",
        padding: "10px",
        fontSize: "1em"
      },
      bmMorphShape: {
        fill: "#373a47"
      },
      bmItemList: {
        color: "#b8b7ad",
        padding: "0.8em"
      },
      bmItem: {
        display: "inline-block"
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)"
      }
    };
    return (
      <Menu
        className={"urband-menu"}
        right
        styles={styles}
        width={"350px"}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <NavLink exact to="/index" onClick={() => this.closeMenu()}>
          Home
        </NavLink>
        <NavLink
          to="/"
          className="in-array"
          onClick={() => this.onclickStepHandler(1)}
        >
          Studio{" "}
          <span className="ico-drop">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </NavLink>
        {this.state.childVisible === 1 ? (
          <div className="sub-drop">
            <NavLink
              exact
              to="/artist"
              activeClassName="selected"
              onClick={() => this.closeMenu()}
            >
              Artists
            </NavLink>
            <NavLink
              exact
              to="/clients"
              activeClassName="selected"
              onClick={() => this.closeMenu()}
            >
              Clients
            </NavLink>
          </div>
        ) : null}
        <NavLink
          exact
          to="/radio"
          className="in-array"
          onClick={() => this.closeMenu()}
        >
          Radio
        </NavLink>
        <NavLink
          exact
          to="/event-list"
          className="in-array"
          onClick={() => this.closeMenu()}
        >
          Events
        </NavLink>
        <NavLink exact to="/who-we-are" onClick={() => this.closeMenu()}>
          About
        </NavLink>
        <NavLink exact to="/gallery" onClick={() => this.closeMenu()}>
          Gallery
        </NavLink>
        <NavLink
          exact
          to="/"
          className="in-array"
          onClick={() => this.onclickStepHandler(2)}
        >
          Purchase
          <span className="ico-drop">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>{" "}
        </NavLink>
        {this.state.childVisible === 2 ? (
          <div className="sub-drop">
            <NavLink to="/event-tickets" onClick={() => this.closeMenu()}>
              Event Ticketing
            </NavLink>
            <NavLink to="/coming-soon" onClick={() => this.closeMenu()}>
              Studio Ticketing
            </NavLink>
            <NavLink to="/store" onClick={() => this.closeMenu()}>
              Merchandise
            </NavLink>
          </div>
        ) : null}
        <NavLink
          exact
          to="/contact"
          className="in-array"
          activeClassName="selected"
          onClick={() => this.closeMenu()}
        >
          Contact
        </NavLink>
      </Menu>
    );
  }
}

export default burgerMenu;
