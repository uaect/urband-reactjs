import React, { Component } from "react";
import { Link } from "react-router-dom";
import ComingSoon from "../Pages/comingsoon.component";
import BannerHero from "../Banners/bannerHero";
import ReadMoreAndLess from "react-read-more-less";

import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";
// import {
//   LazyLoadImage,
//   trackWindowScroll
// } from "react-lazy-load-image-component";
function createMarkup(item) {
  return {__html: item};
}
class Artist extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  gotoAlbumDetails(artistid){

      this.props.history.push({
          pathname: '/albums/detail/'+artistid,
          artistid: artistid,
      })
      
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const posts = this.props.posts;
    return (
      <div>
        <BannerHero title={"Artist"} />
        <div className="fullWrap">
          {posts.length > 0 ? (
            <div>
              <section id="about-two" className="section-padding">
                <div className="tim-container">
                  <div className="artist-timeline">
                    {posts.map(item => {
                      return (
                        <div
                          className="row no-gutters artist-row"
                          key={item.id}
                          onClick={() => this.gotoAlbumDetails(item.id)}
                        >
                          <div className="col-lg-6">
                            <div className="artist-about pr__30">
                              <h3 className="artist-name">{item.name}</h3>
                              <h6>{item.genre}</h6>
                              {/*  <span className="genere">
                                 Album: Rockstar, first rain, Love Song (More)
                               </span>*/}
                              <div className="content">
                                <ReadMoreAndLess
                                  ref={this.ReadMore}
                                  className="read-more-content"
                                  charLimit={300}
                                  readMoreText="Read more"
                                  readLessText="Read less"
                                >
                                  {item.about}
                                </ReadMoreAndLess>
                              </div>
                              {/* 
                              <h4 className="alb-title">Album & Single</h4>
                              <div className="alb-single">
                                <Link to="" className="single-items">
                                  <img
                                    src={require("../../media/about/6.jpg")}
                                    alt="album"
                                  />
                                </Link>
                                <Link to="" className="single-items">
                                  <img
                                    src={require("../../media/about/7.jpg")}
                                    alt="album"
                                  />
                                </Link>
                              </div>*/}
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="album-feature right">
                              {
                                // <LazyLoadImage
                                //   effect="blur"
                                //   src={image_url + "/" + item.image}
                                //   visibleByDefault={
                                //     (image_url + "/" + item.image).src ===
                                //     "https://picsum.photos/200/300"
                                //   }
                                // />
                                <img
                                  src={image_url + "/" + item.image}
                                  className="ink-pattern"
                                  alt="Album"
                                />
                              }
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          ) : (
            ""
          )}
          {posts.length < 0 ? (
            <div>
              <ComingSoon />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchPosts: () => dispatch(actionCreators.fetchPosts())
  };
};

const mapStateToProps = state => {
  return {
    posts: state.posts.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);
