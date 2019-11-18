import React, { Component } from "react";
import ModalVideo from "../../VideoModal/video-modal.component";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class previousShowHome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			previous: [],
			imageArray: [],
			videoArray: []

		}
	}
 
	componentDidMount() {
		this.props.previousshow()
			.then(() => {
				const previous = this.props.previous;
				if (previous) {
					this.setState({
						previous: previous
					})
				}
				if (this.state.previous.video_url) {
					var video = this.state.previous.video_url.split('v=');
					this.setState({
						videoArray: video[1]
					})
				}
				if (this.state.previous.images) {
					var imagess = this.state.previous.images.split(',');
					this.setState({
						imageArray: imagess
					})
				}
			})
			.catch((error) => {
				if (error) {
				}
			})
	}

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";

    return (
      <section className="show-archive">
        {this.state.previous ? (
          <div className="container">
            <div className="d-flex justify-content-center row">
              <div className="col-xl-10">
                <div className="section-title style-five">
                  <h2>PREVIOUS SHOWS</h2>
                  <p>{this.state.previous.title ? this.state.previous.title : ""}</p>
                </div>
                <div className="show-archive-wrapper row no-gutters">
                  {this.state.imageArray[0] ? (
                    <div className="offset-xs-0 offset-sm-4 col-sm-4 col-6">
                      <div className="single-show-archive">
                        <img
                          className="ImageTyp101 hgtTp1"
                          src={image_url + this.state.imageArray[0]}
                          alt=""
                        />
                        <a href="index.html#">
                          <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.state.imageArray[1] ? (
                    <div className="col-6 col-sm-4">
                      <div className="single-show-archive">
                        <img
                          className="ImageTyp101 hgtTp1"
                          src={image_url + this.state.imageArray[1]}
                          alt=""
                        />
                        <a href="index.html#">
                          <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {this.state.imageArray[2] ? (
                    <div className="col-xs-12 col-sm-8">
                      <div className="single-show-archive video-archive">
                        <img
                          className="ImageTyp101 hgtTp2"
                          src={image_url + this.state.imageArray[2]}
                          alt=""
                        />
                        <div className="video-player">
                          <div className="text">
                            <p>{this.state.previous.title}</p>
                            {/* <span>(Live in Tokyo, 2017)</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {this.state.imageArray[0] ? (
                    <div className="col-12 col-sm-4">
                      <div className="single-show-archive video-archive">
                        <img
                          className="ImageTyp101 hgtTp3"
                          src={image_url + this.state.imageArray[0]}
                          alt=""
                        />
                        <div className="video-player">
                          <div className="text">
                            <p>{this.state.previous.title}</p>
                            <span>(Live in Tokyo, 2017)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* <div className="col-12 col-sm-4">
								<div className="single-show-archive">
									<img src="media/album/21.jpg" alt=""/>
									<a href="index.html#"><i className="fa fa-link" aria-hidden="true"></i>
									</a>
								</div>
							</div> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.videoArray[1] ? <ModalVideo title={this.state.videoArray[1]} /> : ""}
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    previousshow: () => dispatch(actionCreators.previousshow())
  };
};

const mapStateToProps = state => {
  return {
    previous: state.previousshow.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(previousShowHome);
