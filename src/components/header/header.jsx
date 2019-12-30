import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAlt, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../header/header.component.css";
import Logo from "../../assets/img/logo_5.png";
import BurgerMenu from "../header/burgerMenu.component";
import icon1 from "../../assets/img/icn1.png";
import icon2 from "../../assets/img/icn2.png";
import icon3 from "../../assets/img/icn3.png";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import * as actionCreators from "../../../src/store/actions/";

library.add(faUserAlt, faCartPlus);

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToken: localStorage.getItem("urbandtoken") ? true : false,
      activeBox: "hide",
      redirect: false
    };
    this.ToggleBox = this.ToggleBox.bind(this);
  }

  componentDidMount() {
    this.fetchcontact()
    this.headercheck()
  }
  fetchcontact() {
    this.props.fetchContact()
      .then(() => {
        if (this.props.contact) {
          var contact = this.props.contact;
          if (contact) {
            this.setState({
              logo: contact.contactus.image
            });
          }
        }
      })
      .catch(error => {
        if (error.error) {
          this.setState({
            errpassword: error.error
          });
        }
      })
  }
  headercheck() {
    this.props.fetchMenues()
      .then(() => {
        if (this.props.menues.length) {
          var headers = this.props.menues;
          if (headers) {
            for (let i = 0; i < headers.length; i++) {
              if (headers[i].title === "Event Tickets") {
                localStorage.setItem('ticketheader', "true");
              }
            }
          }
        }
      })
      .catch(error => {
        if (error.error) {
          this.setState({
            errpassword: error.error
          });
        }
      })




  }
  ToggleBox() {
    let show = this.state.activeBox;
    let index = show.indexOf("show");

    if (index !== -1) {
      show = "hide";
    } else {
      show = "show";
    }

    this.setState({ activeBox: show });
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
    const image_url = "https://admin.urbandmusic.com/storage/";
    const menue = this.props.menues;
    console.log(menue);
    return (
      <div className="AppHeader">
        <div
          onClick={this.ToggleBox}
          className={
            "overlayBoxTp1 " +
            (this.state.activeBox == "show" ? "show" : "hidden")
          }
        >
          &nbsp;
        </div>
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
                    {menue ? (
                      menue.map(el => {
                        return (el.id == '10' && <li>
                          <NavLink
                            to="/index"
                            activeClassName="selected"
                            className="in-array"
                          >
                            {el.title}
                          </NavLink>
                        </li>)
                      })) : ""}
                    <li className="menu-item-has-children in-array">
                      {menue ? (
                        menue.map(el => {
                          return (el.id == '11' && el.title);
                        })) : ""}
                      <ul className="sub-menu">
                        {menue ? (
                          menue.map(el => {
                            return (el.id == '12' && <li>
                              <Link to="/artist">{el.title}</Link>
                            </li>);
                          })) : ""}
                        {menue ? (
                          menue.map(el => {
                            return (el.id == '13' && <li>
                              <Link to="/clients">{el.title}</Link>
                            </li>);
                          })) : ""}
                      </ul>
                    </li>

                    {this.props.menues.some(el => el.title === "Radio") && (
                      <li>
                        <NavLink
                          to="/radio"
                          className="in-array"
                          activeClassName="selected"
                        >
                          Radio
                        </NavLink>
                      </li>
                    )}

                    {menue ? (
                      menue.map(el => {
                        return (el.id == '14' && <li>
                          <NavLink
                            to="/radio"
                            className="in-array"
                            activeClassName="selected"
                          >
                            {el.title}
                          </NavLink>
                        </li>);
                      })) : ""}

                    {menue ? (
                      menue.map(el => {
                        return (el.id == '15' && <li className="menu-item-has-children">
                          <NavLink
                            to="/event-list"
                            activeClassName="selected"
                            className="in-array"
                          >
                            {el.title}
                          </NavLink>
                        </li>);
                      })) : ""}

                    {menue ? (
                      menue.map(el => {
                        return (el.id == '16' && <li>
                          <NavLink
                            to="/who-we-are"
                            activeClassName="selected"
                            className="in-array"
                          >
                            {el.title}
                          </NavLink>
                        </li>);
                      })) : ""}

                    {/* <li>
                      <NavLink exact to="/vlog" className="in-array">
                        Vlog
                      </NavLink>
                    </li> */}

                    {menue ? (
                      menue.map(el => {
                        return (el.id == '18' && <li>
                          <NavLink
                            to="/gallery"
                            activeClassName="selected"
                            className="in-array"
                          >
                            Gallery
                        </NavLink>
                        </li>);
                      })) : ""}

                    <li className="menu-item-has-children in-array">
                      {menue ? (
                        menue.map(el => {
                          return (el.id == '19' && el.title);
                        })) : ""}
                      <ul className="sub-menu">
                        {menue ? (
                          menue.map(el => {
                            return (el.id == '20' && <li>
                              <Link to="/event-tickets">{el.title}</Link>
                            </li>);
                          })) : ""}
                        {menue ? (
                          menue.map(el => {
                            return (el.id == '21' && <li>
                              <Link to="/coming-soon">{el.title}</Link>
                            </li>);
                          })) : ""}
                        {menue ? (
                          menue.map(el => {
                            return (el.id == '22' && <li>
                              <Link to="/store">{el.title}</Link>
                            </li>);
                          })) : ""}
                      </ul>
                    </li>

                    {menue ? (
                      menue.map(el => {
                        return (el.id == '23' && <li>
                          <NavLink
                            to="/contact"
                            className="in-array"
                            activeClassName="selected"
                          >
                            {el.title}
                          </NavLink>
                        </li>);
                      })) : ""}

                  </ul>
                </div>

                <ul className="d-inline-flex avathar-sec DNone768">
                  <li className="d-flex mr-4">
                    {this.state.isToken ? (
                      <Link to="/cart">
                        <span>Cart</span>
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          className="ico-user"
                        />
                      </Link>
                    ) : (
                        ""
                      )}
                  </li>
                  <li className="d-flex pos-relative">
                    {!this.state.isToken ? (
                      <Link to="/login">
                        <span>Log In</span>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          className="ico-user"
                        />
                      </Link>
                    ) : (
                        ""
                      )}
                    {this.state.isToken ? (
                      <Link onClick={this.ToggleBox}>
                        <span>Profile</span>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          className="ico-user"
                        />
                        <div
                          className={
                            "BoxStyleTp105 " +
                            (this.state.activeBox === "show" ? "show" : "hidden")
                          }
                        >
                          <div>
                            <Link to="/profile">
                              <img src={icon1} alt="" />
                              <span>Profile</span>
                            </Link>
                            <Link to="/profile/profileAddress">
                              <img src={icon2} alt="" />
                              <span>Address</span>
                            </Link>
                            <Link to="/profile/profileOrders">
                              <img src={icon3} alt="" />
                              <span>Orders</span>
                            </Link>
                            <Link onClick={this.gotologout} className="LogoutBtn">
                              <span>Log Out</span>
                            </Link>
                          </div>
                        </div>
                      </Link>
                    ) : (
                        ""
                      )}
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


const mapDispatchToProps = dispatch => {
  return {
    fetchContact: () => dispatch(actionCreators.fetchContact()),
    fetchMenues: () => dispatch(actionCreators.fetchMenues())
  };
};

const mapStateToProps = state => {
  return {
    menues: state.menues.items,
    contact: state.contact.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
