import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faAngleDown, faUserAlt);

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
          {menue
            ? menue.map(el => {
                return (
                  el.id === 10 && (
                    <NavLink
                      key={el.id}
                      exact
                      to="/index"
                      onClick={() => this.closeMenu()}
                    >
                      {el.title}
                    </NavLink>
                  )
                );
              })
            : ""}

          {menue
            ? menue.map(el => {
                return (
                  el.id === 16 && (
                    <NavLink
                      key={el.id}
                      exact
                      to="/who-we-are"
                      onClick={() => this.closeMenu()}
                    >
                      {el.title}
                    </NavLink>
                  )
                );
              })
            : ""}

          {menue
            ? menue.map(el => {
                return (
                  el.id === 11 && (
                    <NavLink
                      key={el.id}
                      to="/"
                      className="in-array"
                      onClick={() => this.onclickStepHandler(1)}
                    >
                      {el.title}
                      <span className="ico-drop">
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
                    </NavLink>
                  )
                );
              })
            : ""}

          {this.state.childVisible === 1 ? (
            <div className="sub-drop">
              {menue
                ? menue.map(el => {
                    return (
                      el.id === 12 && (
                        <NavLink
                          key={el.id}
                          exact
                          to="/artist"
                          activeClassName="selected"
                          onClick={() => this.closeMenu()}
                        >
                          {el.title}
                        </NavLink>
                      )
                    );
                  })
                : ""}

              {menue
                ? menue.map(el => {
                    return (
                      el.id === 13 && (
                        <NavLink
                          key={el.id}
                          exact
                          to="/clients"
                          activeClassName="selected"
                          onClick={() => this.closeMenu()}
                        >
                          {el.title}
                        </NavLink>
                      )
                    );
                  })
                : ""}
            </div>
          ) : null}

          {menue
            ? menue.map(el => {
                return (
                  el.id === 14 && (
                    <NavLink
                      key={el.id}
                      exact
                      to="/radio"
                      className="in-array"
                      onClick={() => this.closeMenu()}
                    >
                      {el.title}
                    </NavLink>
                  )
                );
              })
            : ""}

          {menue
            ? menue.map(el => {
                return (
                  el.id === 15 && (
                    <NavLink
                      key={el.id}
                      exact
                      to="/event-list"
                      className="in-array"
                      onClick={() => this.closeMenu()}
                    >
                      {el.title}
                    </NavLink>
                  )
                );
              })
            : ""}

          {menue
            ? menue.map(el => {
                return (
                  el.id === 18 && (
                    <NavLink
                      key={el.id}
                      exact
                      to="/gallery"
                      onClick={() => this.closeMenu()}
                    >
                      {el.title}
                    </NavLink>
                  )
                );
              })
            : ""}

          {menue
            ? menue.map(el => {
                return (
                  el.id === 19 && (
                    <NavLink
                      key={el.id}
                      exact
                      to="/"
                      className="in-array"
                      onClick={() => this.onclickStepHandler(2)}
                    >
                      {el.title}
                      <span className="ico-drop">
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>{" "}
                    </NavLink>
                  )
                );
              })
            : ""}

          {this.state.childVisible === 2 ? (
            <div className="sub-drop">
              {menue
                ? menue.map(el => {
                    return (
                      el.id === 21 && (
                        <NavLink
                          key={el.id}
                          to="/coming-soon"
                          onClick={() => this.closeMenu()}
                        >
                          {el.title}
                        </NavLink>
                      )
                    );
                  })
                : ""}
              {menue
                ? menue.map(el => {
                    return (
                      el.id === 20 && (
                        <NavLink
                          key={el.id}
                          to="/event-tickets"
                          onClick={() => this.closeMenu()}
                        >
                          {el.title}
                        </NavLink>
                      )
                    );
                  })
                : ""}
              {menue
                ? menue.map(el => {
                    return (
                      el.id === 22 && (
                        <NavLink
                          key={el.id}
                          to="/store"
                          onClick={() => this.closeMenu()}
                        >
                          {el.title}
                        </NavLink>
                      )
                    );
                  })
                : ""}
            </div>
          ) : null}

          {menue
            ? menue.map(el => {
                return (
                  el.id === 23 && (
                    <NavLink
                      key={el.id}
                      exact
                      to="/contact"
                      className="in-array"
                      activeClassName="selected"
                      onClick={() => this.closeMenu()}
                    >
                      {el.title}
                    </NavLink>
                  )
                );
              })
            : ""}

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

          {this.state.childVisible === 3 ? (
            <div className="sub-drop">
              {this.props.isLoggedIn || this.state.isToken ? (
                <NavLink
                  exact
                  to="/profile"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  Profile
                </NavLink>
              ) : (
                ""
              )}

              {this.props.isLoggedIn || this.state.isToken ? (
                <NavLink
                  exact
                  to="/cart"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  Cart
                </NavLink>
              ) : (
                ""
              )}

              {this.props.isLoggedIn || this.state.isToken ? (
                <NavLink
                  exact
                  to="/profile/profileAddress"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  Address
                </NavLink>
              ) : (
                ""
              )}

              {this.props.isLoggedIn || this.state.isToken ? (
                <NavLink
                  exact
                  to="/profile/profileOrders"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  Orders
                </NavLink>
              ) : (
                ""
              )}

              {this.props.isLoggedIn || this.state.isToken ? (
                <NavLink
                  exact
                  to="/login"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  Log Out
                </NavLink>
              ) : (
                ""
              )}

              {!this.props.isLoggedIn && !this.state.isToken ? (
                <NavLink
                  exact
                  to="/login"
                  activeClassName="selected"
                  onClick={() => this.closeMenu()}
                >
                  Login
                </NavLink>
              ) : (
                ""
              )}
            </div>
          ) : null}
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
