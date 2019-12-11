import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAt,
  faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import ComingSoon from "../Pages/comingsoon.component";
import BannerHero from "../Banners/bannerHero";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";
import AlertBox from "../hoc/AlertBox/index";

library.add(faAt, faMapMarkerAlt, faPhoneAlt);

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  ))
);

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lng: "",
      message: "",
      errmessage: "",
      name:"",
      errname:"",
      email:"",
      erremail:"",
      alertflag:false

    };
  }
  componentDidMount() {
    this.props.fetchContact();

  }
  handleChange(state, errState, evt) {
    let _state = this.state
    _state[state] = evt.target.value;
    _state[errState] = '';
    this.setState({
      ..._state
    })
  }

  contactmail = () => {

    this.props.contactus()
      .then(() => {
        console.log("tttttttttt", this.props);

      })
      .catch(error => { });


  };

    gotocontactmail = () => {
      const { message, email, name} = this.state;
      var flag = 0;
      if (message.length < 1) {
        flag = 1;
        this.setState({
          errmessage: 'Please enter message'
        })
      }
      if (email.length < 1) {
        flag = 1;
        this.setState({
          erremail: 'Please enter email'
        })
      }else if (!new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)) {
        flag = 1;
        this.setState({ erremail: 'Please enter valid email address' });
      }
      if (name.length < 1) {
        flag = 1;
        this.setState({
          errname: 'Please enter name'
        })
      }
      if (flag === 0) {
      this.props.contactus(this.state)
      .then(() => {

        this.setState({
          alertflag: true,
          message: "",
          errmessage: "",
          name:"",
          errname:"",
          email:"",
          erremail:"",
        })
       
      })
      .catch((error) => {
        
      })
    }
    }
  
  render() {
    var isResponseData = false;
    const detail = this.props.contact;

    const contactus = detail.contactus;
    if (contactus) {
      if (detail.contactus) isResponseData = true;
    }
    return (
      <div>
        {this.state.alertflag?( <AlertBox
          ActiveOrNot={true}
          alertMessage="Thank you for contacting urband"
        />):""}
       
        <BannerHero title={"Contact"} />

        <div className="fullWrap">
          {isResponseData ? (
            <div>
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCH4m_zPhRkylreOmJEwM6uI6bqNUMZ450"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />

              <section className="contact-info">
                <div className="container-fluid no-pad">
                  <div className="contact-info-inner">
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <div className="email-info sin-cont-info d-flex align-items-center">
                          <div className="center-wrap">
                            <FontAwesomeIcon icon={faAt} className="ico" />
                            <h3>Email Us</h3>{" "}
                            <p>
                              Mail:
                              <Link to="">{contactus.email}</Link>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="office-location sin-cont-info d-flex align-items-center">
                          <div className="center-wrap">
                            <FontAwesomeIcon
                              icon={faMapMarkerAlt}
                              className="ico"
                            />
                            <h3>office location</h3>
                            <p>{contactus.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="call-us sin-cont-info d-flex align-items-center">
                          <div className="center-wrap">
                            <FontAwesomeIcon
                              icon={faPhoneAlt}
                              className="ico"
                            />
                            <h3>call Us</h3>
                            <p>
                              <Link to="tel:158-659-8546">
                                {contactus.phone}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="contuct-bottom section-padding">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                      <div className="con-bottom-inner">
                        <h4>CONTACT US</h4>
                        {/*<p>
                          Dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the{" "}
                        </p>*/}
                        <div className="con-page-form">
                          <textarea
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message', 'errmessage')}
                            placeholder="Message"
                          ></textarea>
                          {this.state.errmessage && <div class="text-danger">{this.state.errmessage}</div>}
                          <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this, 'name', 'errname')}
                            placeholder="Name *"
                            className="mar-r"
                          />
                           {this.state.errname && <div class="text-danger">{this.state.errname}</div>}
                          <input type="text" placeholder="Email *"  value={this.state.email}
                            onChange={this.handleChange.bind(this, 'email', 'erremail')} />
                             {this.state.erremail && <div class="text-danger">{this.state.erremail}</div>}
                          <input value="Submit" onClick={this.gotocontactmail} type="submit" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
              <ComingSoon />
            )}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchContact: () => dispatch(actionCreators.fetchContact()),
    contactus: (id) => dispatch(actionCreators.contactus(id))

  };
};

const mapStateToProps = state => {
  return {
    contact: state.contact.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
