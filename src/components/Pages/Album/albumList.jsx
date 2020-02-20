import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerHero from "../../Banners/bannerHero";
import ComingSoon from "../../Pages/comingsoon.component";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";

library.add(faPlay);

class AlbumHome extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const albums = this.props.albums.result;

    return (
      <div>
        <BannerHero title={"Albums"} />

        <section className="section-hero">
          <div className="container">
            <div className="row album-listing">
              {/* <StoreHeader /> */}

              {albums ? (
                albums.length > 0 ? (
                  albums.map(item => {
                    return (
                      <div
                        className="col-lg-3 col-md-3 col-sm-6 col-full-width"
                        key={item.id}
                      >
                        <div className="product">
                          <Link
                            to={{
                              pathname: `/albums/detail/${item.id}`
                            }}
                          >
                            <div className="product-thumb album-thumb">
                              <img
                                className=" fit-it img-responsive"
                                src={image_url + item.image}
                                alt="Product Thumb"
                              />
                              <div className="play-btn-round">
                                {" "}
                                <FontAwesomeIcon icon={faPlay} />
                              </div>
                            </div>
                          </Link>
                          <div className="product-detail">
                            <h4 className="product-name">Music Album</h4>
                            <div>
                              By <b>{item.title}</b>
                            </div>
                            <div>
                              Released on <b>{item.created_at}</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <ComingSoon />
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumHome);
