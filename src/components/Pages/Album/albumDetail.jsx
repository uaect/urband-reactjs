import React, { Component } from "react";
import { Link } from "react-router-dom";
import DetailHero from "../Music/detail";
import PlayerHero from "../Music/player";
import BannerHero from "../../Banners/bannerHero";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
class AlbumDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      albumid: this.props.location.pathname.split("/").pop(),
      artistid: this.props.location.artistid
    }
  }

  componentDidMount() {
    console.log(this.state);
    this.props.fetchAlbumsDetails(this.state.albumid, this.state.artistid);
  }

  PlayVideoHandler() {
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
    const album = this.props.album;
    return (
      <div>
        <BannerHero title={"Album Detail"} />
        <DetailHero value={album} />
          <div className="album-player">
            <PlayerHero value={album}></PlayerHero>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    fetchAlbumsDetails: (albumid, artistid) => dispatch(actionCreators.fetchAlbumsDetails(albumid, artistid))
  };

};

const mapStateToProps = state => {
  return {
    album: state.albumdetails.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
