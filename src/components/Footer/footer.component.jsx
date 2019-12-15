import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";
import {
  faFacebookF,
  faTwitter,
  faSoundcloud,
  faYoutube,
  faLinkedin,
  faInstagram,
  faApple,
  faVimeo
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faFacebookF,
  faTwitter,
  faSoundcloud,
  faYoutube,
  faLinkedin,
  faInstagram,
  faApple,
  faVimeo
);

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "",
      social: "",
      facebook: "",
      Twitter: "",
      Youtube: "",
      LinkedIn: "",
      Instagram: "",
      SoundCloud: "",
      Vimeo: ""
    }
  }
  componentDidMount() {
    this.props.fetchWhoWeAre()
      .then(() => {
        const detail = this.props.detail.result;
        if (detail) {
          if (detail.whoweare)
            this.setState({ description: detail.whoweare });

        }
      })
      .catch((error) => {
        if (error) {
        }
      })
    this.props.getsocial()
      .then(() => {
        console.log("foothher");
        const social = this.props.social;
        if (social) {
          for (let i = 0; i < social.length; i++) {
            if (social[i].title === "Facebook") {
              this.setState({
                facebook: social[i].description
              });
            }
            if (social[i].title === "Twitter") {
              this.setState({
                Twitter: social[i].description
              });
            }
            if (social[i].title === "Youtube") {
              this.setState({
                Youtube: social[i].description
              });
            }
            if (social[i].title === "LinkedIn") {
              this.setState({
                LinkedIn: social[i].description
              });
            }
            if (social[i].title === "Instagram") {
              this.setState({
                Instagram: social[i].description
              });
            }
            if (social[i].title === "SoundCloud") {
              this.setState({
                SoundCloud: social[i].description
              });
            }
            if (social[i].title === "Vimeo") {
              this.setState({
                Vimeo: social[i].description
              });
            }
          }


          console.log("fooer", this.state);
        }
      })
      .catch((error) => {
        if (error) {
        }
      })
  }
  render() {
    return (
      <footer id="footer-3" className="AppFooter">
        <div className="container">
          <div className="d-flex justify-content-center row">
            <div className="col-xl-10">
              <div className="footer-three-bottom">
                <div className="footer-three-left">
                  <Link to="/">
                    <img
                      src={require("../../assets/img/logo_5_dark.png")}
                      alt=""
                      className="foot-logo"
                    />
                  </Link>
                  <p>
                    {this.state.description.description}
                  </p>
                </div>
                <div className="footer-three-right">
                  <ul className="footer-three-menu">
                    <li>
                      <Link to="/event-tickets">Event Tickets</Link>
                    </li>
                    <li>
                      <Link to="/store">Merchandise</Link>
                    </li>
                    <li>
                      <Link to="/radio">Radio</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div className="footer-social-three">
                    <ul>
                      {this.state.facebook ? (<li>
                        <a href={this.state.facebook}>
                          {" "}
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                      </li>) : ""}

                      {this.state.Youtube ? (<li>
                        <a href={this.state.Youtube}>
                          {" "}
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                      </li>) : ""}

                      {this.state.LinkedIn ? (<li>
                        <a href={this.state.LinkedIn}>
                          {" "}
                          <FontAwesomeIcon icon={faLinkedin} />

                        </a>
                      </li>) : ""}
                      {this.state.Twitter ? (<li>
                        <a href={this.state.Twitter}>
                          {" "}
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>) : ""}
                      {this.state.Instagram ? (<li>
                        <a href={this.state.Instagram}>
                          {" "}
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>) : ""}
                      {this.state.Vimeo ? (<li>
                        <a href={this.state.Vimeo}>
                          {" "}
                          <FontAwesomeIcon icon={faVimeo} />
                        </a>
                      </li>) : ""}
                      {this.state.SoundCloud ? (<li>
                        <a href={this.state.SoundCloud}>
                          {" "}
                          <FontAwesomeIcon icon={faSoundcloud} />
                        </a>
                      </li>) : ""}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchWhoWeAre: () => dispatch(actionCreators.fetchWhoWeAre()),
    getsocial: () => dispatch(actionCreators.getsocial())
  };
};

const mapStateToProps = state => {
  return {
    detail: state.whoweare.items,
    social: state.social.items
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);


