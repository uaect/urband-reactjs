import React from "react";
//import sliderHeroimg1 from '../../media/background/mouse-move.png';
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";

class sliderHero extends React.Component {
  componentDidMount() {
    this.props.fetchBanner();
  }

  render() {
    const image_url = "http://admin.urbandmusic.com/storage/";
    const getbanner = this.props.banners;
    console.log("log", getbanner);
    
    let styles = {
      backgroundImage: 'url(' + image_url + getbanner.image + ')'
    };


    return (
      <section className="banner-five" style={styles}>
        <div className="tim-container">
         
          {/* <div> <img src={image_url + homebanner.image} alt="banner" /></div> */}
          <div className="baneer-five-content"> 
            <div className="content sp-container">
              <div className="sp-content">
                <div className="sp-globe"></div>
                <h2 className="frame-1">MILANDO</h2>
                <h2 className="frame-2">JOHN LENNON</h2>
                <h2 className="frame-3">PAUL McKART</h2>
                <h2 className="frame-4">GEORGE HARRIS</h2>
              </div>
              <h3>DYNNEX HALL - March 17, 2018</h3>
              <a className="tim-slide-btn" href="index.html#">
                TICKETS
              </a>
            </div>
          </div>
        </div>

        <div className="smoke-wrqpper">
          <canvas id="canvas"></canvas>
        </div>
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchBanner: () => dispatch(actionCreators.fetchBanner())
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
)(sliderHero);
