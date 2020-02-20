import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faAngleDown, faUserAlt);

const MenuPath = {
  10: "/index",
  11: "/",
  12: "/artist",
  16: "/who-we-are",
  13: "/clients",
  14: "/radio",
  15: "/event-list",
  18: "/gallery",
  19: "/event-tickets",
  20: "/",
  21: "/coming-soon",
  22: "/store",
  23: "/contact"
};

class burgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToken: localStorage.getItem("urbandtoken") ? true : false,
      menuOpen: false,
      childVisible: false
    };
  }

  componentDidMount() {
    this.props.fetchMenues();
  }

  showSettings(event) {
    event.preventDefault();
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

  gotologout = () => {
    localStorage.removeItem("urbandtoken");
    localStorage.removeItem("urbandData");
    window.location.href = "/";
    this.setState({
      redirect: true,
      isToken: localStorage.getItem("urbandtoken") ? true : false
    });
  };

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
      <div>
        <Menu
          className={"urband-menu"}
          right
          styles={styles}
          width={"350px"}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          {menue &&
            menue.map(el => {
              if (this.state.childVisible === 2 && el.id === 21) {
                return (
                  <div className="sub-drop">
                    <NavLink
                      key={el.id}
                      exact
                      to={`${MenuPath[el.id]}`}
                      onClick={() => this.closeMenu()}
                    >
                      {el.title}
                    </NavLink>
                  </div>
                );
              } else {
                return (
                  <NavLink
                    key={el.id}
                    exact
                    to={`${MenuPath[el.id]}`}
                    onClick={() => this.closeMenu()}
                  >
                    {el.title}
                  </NavLink>
                );
              }
            })}

          <NavLink
            to="/"
            className="in-array acc-link"
            onClick={() => this.onclickStepHandler(3)}
          >
            <FontAwesomeIcon icon={faUserAlt} className="ico-user" />
            Account
            <span className="ico-drop">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </NavLink>

          {this.state.childVisible === 3 && (
            <div className="sub-drop">
              {(this.props.isLoggedIn || this.state.isToken) && (
                <>
                  <NavLink
                    exact
                    to="/profile"
                    activeClassName="selected"
                    onClick={() => this.closeMenu()}
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    exact
                    to="/cart"
                    activeClassName="selected"
                    onClick={() => this.closeMenu()}
                  >
                    Cart
                  </NavLink>
                  <NavLink
                    exact
                    to="/profile/profileAddress"
                    activeClassName="selected"
                    onClick={() => this.closeMenu()}
                  >
                    Address
                  </NavLink>
                  <NavLink
                    exact
                    to="/profile/profileOrders"
                    activeClassName="selected"
                    onClick={() => this.closeMenu()}
                  >
                    Orders
                  </NavLink>
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="selected"
                    onClick={() => this.closeMenu()}
                  >
                    Log Out
                  </NavLink>
                </>
              )}

              {!this.props.isLoggedIn && !this.state.isToken && (
                <NavLink
                  exact
                  to="/login"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  Login
                </NavLink>
              )}
            </div>
          )}
        </Menu>
      </div>
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
    menues: state.menues.items,
    isLoggedIn: state.login.isLoggedIn
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(burgerMenu);
