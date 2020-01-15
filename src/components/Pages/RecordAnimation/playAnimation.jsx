import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import cover from "../../../media/album/cover.jpg";
import record from "../../../media/background/record.png";
import recordshade from "../../../media/background/record-shade.png";
import playerkey from "../../../media/background/player-key.png";
import FixedBottomPlayer from "../../uicomponents/PlayerBottom/fixedBottomPlayer.component";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
library.add(faPlay);

class playAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomPlayerActivated: "hide"
    };
    this.PlayVideoHandler = this.PlayVideoHandler.bind(this);
  }
  componentDidMount() {
    this.props.fetchAlbums();
  }
  PlayVideoHandler() {
    console.log("ssssss");
    let show = this.state.bottomPlayerActivated;
    let index = show.indexOf("show");

    if (index != -1) {
      show = "hide";
    } else {
      show = "show";
    }

    this.setState({ bottomPlayerActivated: show });
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const events = this.props.albums.result;
    return (
      <section className="section-padding latest-relese ani-slideInDown">
        {events && events[0] ? (
          <div className="container">
            <div className="row">
              <div className="section-title style-four">
                <h2>LATEST RELEASE</h2>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col-xl-10" id="moving-player">
                  <div className="row">
                    <div className="col-sm-8 col-md-9 col-lg-8">
                      <div className="latest-album-left">
                        <div className="cover-img">
                          <Link
                            to={{
                              pathname: `/albums/detail/${events[0].id}`
                            }}
                            onClick={this.ToggleBox}
                          >
                            <img
                              className="maxWidth195"
                              src={image_url + events[0].image}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="albun-details">
                          <Link
                            to={{
                              pathname: `/albums/detail/${events[0].id}`
                            }}
                          >
                            <h6>{events[0].title}</h6>
                          </Link>
                          <p>{events[0].description}</p>
                        </div>
                      </div>
                    </div>
                    {events[0].tracks && events[0].tracks[0].file ? (
                      <div className="col-sm-4 col-md-3 col-lg-4">
                        <div className="latest-album-right">
                          <h6>LISTEN DEMO NOW</h6>
                          <div className="latest-album-btn">
                            <span
                              className="sm2_button"
                              onClick={this.PlayVideoHandler}
                            >
                              {this.state.bottomPlayerActivated == "show" ? (
                                <FontAwesomeIcon icon={faStop} />
                              ) : (
                                <FontAwesomeIcon icon={faPlay} />
                              )}
                            </span>
                            {this.state.bottomPlayerActivated == "show" ? (
                              <FixedBottomPlayer
                                action={this.PlayVideoHandler}
                                ArtistImage={image_url + events[0].image}
                                ArtistTittle={events[0].title}
                                trackUrl={image_url + events[0].tracks[1].file}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="col-xl-12">
                      <div className="record-player">
                        <div
                          className={
                            "player-main " +
                            (this.state.bottomPlayerActivated == "show"
                              ? "active"
                              : "")
                          }
                        >
                          <img src={record} alt="" />
                        </div>
                        <div
                          className={
                            "player-main-shade " +
                            (this.state.bottomPlayerActivated == "show"
                              ? "active"
                              : "")
                          }
                        >
                          <img src={recordshade} alt="" />
                        </div>
                        <div
                          className={
                            "record-key " +
                            (this.state.bottomPlayerActivated == "show"
                              ? "active"
                              : "")
                          }
                        >
                          <img src={playerkey} alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        "bubble-wrap " +
                        (this.state.bottomPlayerActivated == "show"
                          ? "active"
                          : "")
                      }
                    >
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>

                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>

                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>

                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-3"></div>

                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>
                    </div>
                    <div
                      className={
                        "bubble-wrap-right " +
                        (this.state.bottomPlayerActivated == "show"
                          ? "active"
                          : "")
                      }
                    >
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>

                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>

                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>

                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-3"></div>

                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-1"></div>

                      <div className="bubble icon-5"></div>

                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>

                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-1"></div>

                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>

                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>

                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-5"></div>
                      <div className="bubble icon-2 "></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-1"></div>
                      <div className="bubble icon-3"></div>
                      <div className="bubble icon-4"></div>
                      <div className="bubble icon-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchAlbums: () => dispatch(actionCreators.fetchAlbums())
  };
};

const mapStateToProps = state => {
  return {
    albums: state.albums.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(playAnimation);
