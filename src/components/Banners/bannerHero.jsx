import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

class BannerHero extends Component {
  // constructor(props){
  //   super(props)
  // }
  componentDidMount() {
    let banner = this.props.title;
    this.props.fetchBanner(banner);
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const getbanner = this.props.banners;

    let bannerImg = {
      background: "url(" + image_url + getbanner.image + ")"
    };

    return (
      <div>
        <section className="page-header" style={bannerImg}>
          <div className="tim-container">
            <div className="page-header-title text-center">
              <h2>{getbanner.title}</h2>
            </div>

            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About</span>
            </div>
          </div>
        </section>
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BannerHero);
