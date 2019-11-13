import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import {
  CarouselProvider,
  Slider,
  Slide
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
class sliderHero extends React.Component {
  componentDidMount() {
    this.props.fetchHomeBanner("Home");
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const getbanner = this.props.homebanners;
    console.log("bannerssssssss",getbanner);
    
    let styles = {
      backgroundImage: "url(" + image_url + getbanner.image + ")"
    };
    return (
      <div className="heroCarouselBox">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={55}
          totalSlides={3}
          orientation="horizontal"
          playDirection="forward"
          touchEnabled={true}
          isPlaying={true}
          interval = {9000}
        >
          <Slider>
            <Slide index={0}>
              <section className="banner-five" style={styles}>
                <div className="tim-container">
                  <div className="baneer-five-content">
                    <div className="content sp-container">
                      <div className="sp-content">
                        <div className="sp-globe"></div>
                        <h2 className="frame-1">JOHN LENNON</h2>
                        <h2 className="frame-2">JOHN LENNON</h2>
                        <h2 className="frame-3">JOHN LENNON</h2>
                        <h2 className="frame-4">JOHN LENNON</h2>
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
            </Slide>
            <Slide index={1}>
              <section className="banner-five" style={styles}>
                <div className="tim-container">
                  <div className="baneer-five-content">
                    <div className="content sp-container">
                      <div className="sp-content">
                        <div className="sp-globe"></div>
                        <h2 className="frame-1">MILANDO</h2>
                        <h2 className="frame-2">MILANDO</h2>
                        <h2 className="frame-3">MILANDO</h2>
                        <h2 className="frame-4">MILANDO</h2>
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
            </Slide>
            <Slide index={2}>
              <section className="banner-five" style={styles}>
                <div className="tim-container">
                  <div className="baneer-five-content">
                    <div className="content sp-container">
                      <div className="sp-content">
                        <div className="sp-globe"></div>
                        <h2 className="frame-1">MILANDO</h2>
                        <h2 className="frame-2">MILANDO</h2>
                        <h2 className="frame-3">MILANDO</h2>
                        <h2 className="frame-4">MILANDO</h2>
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
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    );

    // return (

    // );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchHomeBanner: (id) => dispatch(actionCreators.fetchHomeBanner(id))
  };
};

const mapStateToProps = state => {
  return {
    homebanners: state.homebanner.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sliderHero);
