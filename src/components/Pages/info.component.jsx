import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBookmark,
  faTrophy,
  faUsers,
  faTheaterMasks
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";
library.add(faBookmark, faTrophy, faUsers, faTheaterMasks);

class InfoHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      founded: 0,
      doing: 0,
      clients: 0,
      events: 0
    };
  }
  componentDidMount() {
    this.props
      .aboutfounded()
      .then(() => {
        const detail = this.props.detail;
        if (detail) {
          for (let i = 0; i < detail.length; i++) {
            if (detail[i].title === "Founded") {
              this.setState({ founded: detail[i].description });
            }
            if (detail[i].title === "Doing") {
              this.setState({ doing: detail[i].description });
            }
            if (detail[i].title === "Events") {
              this.setState({ events: detail[i].description });
            }
            if (detail[i].title === "Clients") {
              this.setState({ clients: detail[i].description });
            }
          }
        }
      })
      .catch(error => {
        if (error) {
        }
      });
  }

  render() {
    return (
      <div>
        <div className="black-hero-bg band-info-section text-center">
          <div className="container">
            <div className="row band-info-items">
              <div className="col-lg-2 offset-xl-1 col-md-4 col-6">
                <div className="band-info-item">
                  <div className="band-info-icon">
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                  <h6 className="band-info-title">Founded</h6>
                  <p className="band-info-content">{this.state.founded}</p>
                </div>
              </div>
              <div className="col-lg-2 offset-xl-1 col-md-4 col-6">
                <div className="band-info-item">
                  <div className="band-info-icon">
                    <FontAwesomeIcon icon={faTrophy} />
                  </div>
                  <h6 className="band-info-title">Doing</h6>
                  <p className="band-info-content">{this.state.doing}</p>
                </div>
              </div>
              <div className="col-lg-2 offset-xl-1 col-md-4 col-6">
                <div className="band-info-item">
                  <div className="band-info-icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <h6 className="band-info-title">Clients</h6>
                  <p className="band-info-content">{this.state.clients}</p>
                </div>
              </div>
              <div className="col-lg-2 offset-xl-1 col-md-4 col-6">
                <div className="band-info-item">
                  <div className="band-info-icon">
                    <FontAwesomeIcon icon={faTheaterMasks} />
                  </div>
                  <h6 className="band-info-title">Events</h6>
                  <p className="band-info-content">{this.state.events}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    aboutfounded: () => dispatch(actionCreators.aboutfounded())
  };
};

const mapStateToProps = state => {
  return {
    detail: state.aboutfounded.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoHero);
