import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faAngleDown);

class burgerMenu extends Component {

  componentDidMount() {
    this.props.fetchMenues()
  }

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
    const menue = this.props.menues;

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
        {menue ? (
          menue.map(el => {
            return (el.id == '10' &&<NavLink exact to="/index" onClick={() => this.closeMenu()}>
              {el.title}
            </NavLink>)
          })) : ""}

        {menue ? (
          menue.map(el => {
            return (el.id == '11' && <NavLink
              to="/"
              className="in-array"
              onClick={() => this.onclickStepHandler(1)}
            >
              {el.title}
              <span className="ico-drop">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </NavLink>);
          })) : ""}


        {this.state.childVisible === 1 ? (
          <div className="sub-drop">
            {menue ? (
              menue.map(el => {
                return (el.id == '12' && <NavLink
                  exact
                  to="/artist"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  {el.title}
                </NavLink>);
              })) : ""}

            {menue ? (
              menue.map(el => {
                return (el.id == '13' && <NavLink
                  exact
                  to="/clients"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  {el.title}
                </NavLink>);
              })) : ""}


          </div>
        ) : null}

        {menue ? (
          menue.map(el => {
            return (el.id == '14' && <NavLink
              exact
              to="/radio"
              className="in-array"
              onClick={() => this.closeMenu()}
            >
              {el.title}
            </NavLink>);
          })) : ""}

        {menue ? (
          menue.map(el => {
            return (el.id == '15' && <NavLink
              exact
              to="/event-list"
              className="in-array"
              onClick={() => this.closeMenu()}
            >
              {el.title}
            </NavLink>);
          })) : ""}


        {menue ? (
          menue.map(el => {
            return (el.id == '16' && <NavLink exact to="/who-we-are" onClick={() => this.closeMenu()}>
              {el.title}
            </NavLink>);
          })) : ""}


        {menue ? (
          menue.map(el => {
            return (el.id == '18' && <NavLink exact to="/gallery" onClick={() => this.closeMenu()}>
              {el.title}
            </NavLink>);
          })) : ""}



        {menue ? (
          menue.map(el => {
            return (el.id == '19' && <NavLink
              exact
              to="/"
              className="in-array"
              onClick={() => this.onclickStepHandler(2)}
            >
              {el.title}
              <span className="ico-drop">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>{" "}
            </NavLink>);
          })) : ""}




        {this.state.childVisible === 2 ? (
          <div className="sub-drop">
            {menue ? (
              menue.map(el => {
                return (el.id == '21' && <NavLink to="/coming-soon" onClick={() => this.closeMenu()}>
                  {el.title}
                </NavLink>);
              })) : ""}
            {menue ? (
              menue.map(el => {
                return (el.id == '20' && <NavLink to="/event-tickets" onClick={() => this.closeMenu()}>
                  {el.title}
                </NavLink>);
              })) : ""}
            {menue ? (
              menue.map(el => {
                return (el.id == '22' && <NavLink to="/store" onClick={() => this.closeMenu()}>
                  {el.title}
                </NavLink>);
              })) : ""}
          </div>
        ) : null}


        {menue ? (
          menue.map(el => {
            return (el.id == '23' && <NavLink
              exact
              to="/contact"
              className="in-array"
              activeClassName="selected"
              onClick={() => this.closeMenu()}
            >
              {el.title}
            </NavLink>);
          })) : ""}

      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMenues: () => dispatch(actionCreators.fetchMenues())
  };
};

const mapStateToProps = state => {
  return {
    menues: state.menues.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(burgerMenu);
