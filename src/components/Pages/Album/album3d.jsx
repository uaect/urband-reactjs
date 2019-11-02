import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class albumListHome extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    var isResponseData = false;
    if (this.props.albums.success === true)
      // Second step
    isResponseData = true;
    const image_url = "https://admin.urbandmusic.com/storage/";
    const albums = this.props.albums.result; // first step
    //console.log("albumxzzzz", albums);

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

              <div className="three-d-album-width">
                <div className="row">
                  <div className="threed-container-wrapper">
                    <div className="threed-container-inner">
                      {albums.length > 0
                        ? albums.map(item => {
                            return (
                              <div className="col-md-2" key={item.id}>
                                <div className="single-3d col-md-2"></div>

                                <div className="single-3d" key={item.id}>
                                  <Link to="/albums">
                                    <img src={image_url + item.image} alt="" />
                                  </Link>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(albumListHome);
