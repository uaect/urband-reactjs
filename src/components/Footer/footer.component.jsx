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
      description: ""
    }
  }
  componentDidMount() {
    this.props.fetchWhoWeAre()
      .then(() => {
        const detail = this.props.detail.result;
        if (detail) {
          console.log("footer", detail);

          if (detail.whoweare)
          this.setState({description: detail.whoweare});

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
                      <li>
                        <Link to="/">
                          {" "}
                          <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.urbandmusic.com/">
                          {" "}
                          <FontAwesomeIcon icon={faYoutube} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          {" "}
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          {" "}
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          {" "}
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          {" "}
                          <FontAwesomeIcon icon={faApple} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          {" "}
                          <FontAwesomeIcon icon={faVimeo} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          {" "}
                          <FontAwesomeIcon icon={faSoundcloud} />
                        </Link>
                      </li>
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
    fetchWhoWeAre: () => dispatch(actionCreators.fetchWhoWeAre())
  };
};

const mapStateToProps = state => {
  return {
    detail: state.whoweare.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);


