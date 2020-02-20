import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

class BannerHero extends Component {
  componentDidMount() {
    let banner = this.props.title;
    this.props.fetchBanner(banner);
  }

  render() {
    const getbanner = this.props.banners;
    let bannerImg = {
      background:
        "url(" +
        "https://admin.urbandmusic.com/storage/" +
        getbanner.image +
        ")"
    };
    return (
      <section className="page-header" style={bannerImg}>
        <div className="tim-container">
          <div className="page-header-title text-center">
            <h2>{getbanner.title ? getbanner.title : ""}</h2>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBanner: banner => dispatch(actionCreators.fetchBanner(banner))
  };
};
const mapStateToProps = state => {
  return {
    banners: state.banners.items
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BannerHero);
