import React, { Component } from "react";
import WhatweDo from "../Pages/what-we-do.component";
import InfoHero from "../Pages/info.component";
import BannerHero from "../Banners/bannerHero";
import Gang from "../Pages/gang.component";
import ComingSoon from "../Pages/comingsoon.component";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMixcloud } from "@fortawesome/free-brands-svg-icons";
import { faGlassCheers, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faGlassCheers, faMixcloud, faMicrophone);
class WhoWeAre extends Component {
  componentDidMount() {
    this.props.fetchWhoWeAre();
  }

  render() {
    var isResponseData = false;
    if (this.props.detail.success === true) isResponseData = true;

    const image_url = "https://admin.urbandmusic.com/storage/";
    var detail = this.props.detail.result;
    if (detail)
    if(detail.whoweare) 
    var whoweare = detail.whoweare;

    return (
      <div className="fullWrap">
        <BannerHero title={"About"} />
        <section className="section-hero pb-0">
          <div className="fullWrap">
            {isResponseData ? (
              <div className="container">
                <div className="row">
                  <div className="section-title style-four">
                    <h2>{whoweare ? whoweare.title : ""}</h2>
                    <p>{whoweare ? whoweare.description : ""}</p>
                    {/* <Link to="/" className="tim-btn hero">
                      Subscribe Us
                    </Link> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="band-img">
                      <img
                        className="img-responsive"
                        src={whoweare ? image_url + "/" + whoweare.image : ""}
                        alt="About Band"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <ComingSoon />
            )}
          </div>

          <InfoHero />
        </section>

       {/* <section className="black-bg side-img-section what-we-do-section">
          <div className="col-sm-6 col-sm-offset-6 side-img d-none d-md-block"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="doing-items section-padding">
                  <div className="doing-item">
                    <div className="doing-icon">
                      <FontAwesomeIcon
                        icon={faMixcloud}
                        className="doing-icon"
                      />
                    </div>
                    <h4 className="doing-title">Party Song</h4>
                    <p className="doing-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit
                      amet,
                    </p>
                  </div>
                  <div className="doing-item">
                    <div className="doing-icon">
                      <FontAwesomeIcon
                        icon={faGlassCheers}
                        className="doing-icon"
                      />
                    </div>
                    <h4 className="doing-title">Special Event</h4>
                    <p className="doing-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit
                      amet,
                    </p>
                  </div>
                  <div className="doing-item">
                    <div className="doing-icon">
                      <FontAwesomeIcon
                        icon={faMicrophone}
                        className="doing-icon"
                      />
                    </div>
                    <h4 className="doing-title">Live Concert</h4>
                    <p className="doing-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit
                      amet,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </section>*/}

        <WhatweDo />
        <Gang />
      </div>
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
)(WhoWeAre);
