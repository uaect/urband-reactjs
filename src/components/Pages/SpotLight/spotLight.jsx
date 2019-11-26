import React, { Component } from "react";
import ModalVideo from "../../VideoModal/video-modal.component";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";

class spotLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotlight: [],
      imageArray: [],
      videoArray: []
    };
  }

  componentDidMount() {
    this.props
      .spotlight()
      .then(() => {
        const spotlight = this.props.spot_light;
        if (spotlight) {
          this.setState({
            spotlight: spotlight
          });
        }
        if (this.state.spotlight.video_url) {
          var video = this.state.spotlight.video_url.split("v=");
          this.setState({
            videoArray: video[1]
          });
        }
        if (this.state.spotlight.images) {
          var imagess = this.state.spotlight.images.split(",");
          this.setState({
            imageArray: imagess
          });
        }
      })
      .catch(error => {
        if (error) {
        }
      });
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";

    return (
      <section className="section-padding-two wide_line_bg">
        <div className="container">
          <div className="d-flex justify-content-center row">
            <div className="col-xl-10">
              <div className="section-title style-five">
                <h2>SPOTLIGHT</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority.
                </p>
              </div>
              <div className="row">
                {this.state.spotlight ? (
                  <div className="grid-60">
                    <div className="spotlight-inner">
                      <img
                        className="SpotLightImg "
                        src={image_url + this.state.imageArray[0]}
                        alt=""
                      />
                      <div className="video-player-three">
                        <div className="text">
                          <p>{this.state.spotlight.title}</p>
                          {/* <span>(Live in Tokyo, 2017)</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="grid-40">
                  <div className="subscribe-two">
                    <div className="section-title style-five">
                      <h2>SUBSCRIBE</h2>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available but the majority.
                      </p>
                    </div>
                    <form action="#">
                      <input placeholder="Enter Your Email" type="text" />
                      <button type="submit" className="submit">
                        send me
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.videoArray.length ? (
            <ModalVideo title={this.state.videoArray} />
          ) : (
            ""
          )}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    spotlight: () => dispatch(actionCreators.spotlight())
  };
};

const mapStateToProps = state => {
  return {
    spot_light: state.spotlight.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(spotLight);
