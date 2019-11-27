import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

class multiCarouselHero extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const posts = this.props.posts;
    console.log(posts);

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <section className="artist-lineup hero">
        <div className="tim-container clearfix">
          {posts && posts.length > 0 && (
            <Carousel responsive={responsive} arrows={true}>
              {posts.map(item => {
                return (
                  <Link
                    to={{
                      pathname: `/artist`
                    }} key={item.id}
                  >
                  <div className="artist-single home-page" >
                      <img
                        src={image_url + "/" + item.image}
                        className="ink-pattern"
                        alt="Album"
                      />

                      <div className="artist-single-content">
                        <h6>{item.name}</h6>
                        <p>{item.genre}</p>
                      </div>
                  </div>
                  </Link>
                );
              })}
            </Carousel>
          )}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
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
)(multiCarouselHero);
