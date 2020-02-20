import React, { Component } from "react";
import InfoHero from "../Pages/info.component";
import BannerHero from "../Banners/bannerHero";
import Gang from "../Pages/gang.component";
import ComingSoon from "../Pages/comingsoon.component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMixcloud } from "@fortawesome/free-brands-svg-icons";
import { faGlassCheers, faMicrophone } from "@fortawesome/free-solid-svg-icons";
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

    var detail = this.props.detail.result;
    if (detail) if (detail.whoweare) var whoweare = detail.whoweare;

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
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="band-img">
                      <img
                        className="img-responsive"
                        src={whoweare ? "https://admin.urbandmusic.com/storage/" + whoweare.image : ""}
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

        {/* <WhatweDo /> */}
        <section className="section-hero pb-0">
          <Gang />
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWhoWeAre: () => dispatch(actionCreators.fetchWhoWeAre())
  };
};

const mapStateToProps = state => {
  return {
    detail: state.whoweare.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoWeAre);
