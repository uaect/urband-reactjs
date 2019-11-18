import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";

library.add(faPlay);

class albumListHome extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    var isResponseData = false;
    if (this.props.albums.success === true)
      // Second step
      isResponseData = true;
    const image_url = "http://admin.urbandmusic.com/storage/";
    const albums = this.props.albums.result; // first step

    return (
      <div className="fullWrap">
        {isResponseData ? (
          <div>
            <section className="three-d-album">
              <div className="section-title style-four">
                <h2>TRENDING ALBUMS</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some injected
                  humour.
                </p>
              </div>

              <div className="more-album">
                <Link to="/albums">
                  SEE ALL ALBUMS
                  <FontAwesomeIcon icon={faPlay} className="play" />
                </Link>
              </div>

              <div className="album-boxs d-flex">
                <div className="col-xl-10">
                  <div className="row justify-content-center album-box-wrap">
                    {albums.length > 0
                      ? albums.map(item => {
                          return (
                            <div
                              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 urband-col-xs-6 "
                              key={item.id}
                            >
                              <div className="album-box album-box-two">
                                <div className="box-thumb">
                                  <Link
                                    to={{
                                      pathname: `/albums/detail/${item.id}`
                                    }}
                                  >
                                    <img src={image_url + item.image} alt="" />
                                  </Link>
                                  {/* <div className="icon float-right">
                                    <i className="tim-headphones"></i>
                                  </div> */}
                                </div>

                                <div className="album-details clearfix">
                                  <div className="content">
                                    <h3 className="album-name">{item.title}</h3>
                                    <p>{item.tracks.name}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="page-padd"></div>
        )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(albumListHome);
