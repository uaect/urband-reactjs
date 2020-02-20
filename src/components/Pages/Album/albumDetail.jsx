import React, { Component } from "react";
import DetailHero from "../Music/detail";
import PlayerHero from "../Music/player";
import BannerHero from "../../Banners/bannerHero";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
class AlbumDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumid: this.props.location.pathname.split("/").pop(),
      artistid: this.props.location.artistid
    };
  }

  componentDidMount() {
    this.props.fetchAlbumsDetails(this.state.albumid, this.state.artistid);
  }

  PlayVideoHandler() {
    let show = this.state.bottomPlayerActivated;
    let index = show.indexOf("show");

    if (index !== -1) {
      show = "hide";
    } else {
      show = "show";
    }

    this.setState({ bottomPlayerActivated: show });
  }

  render() {
    const album = this.props.album;
    console.log("albumsss :", album.id);
    return (
      <div>
        <BannerHero title={"Album Detail"} />
        {album.id ? (
          <div>
            <DetailHero value={album} />
            <div className="album-player">
              <PlayerHero value={album}></PlayerHero>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="style-fullwidth">
                <center>
                  <h3 className="artist-name">Album Not Found !</h3>
                </center>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchAlbumsDetails: (albumid, artistid) =>
      dispatch(actionCreators.fetchAlbumsDetails(albumid, artistid))
  };
};

const mapStateToProps = state => {
  return {
    album: state.albumdetails.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
