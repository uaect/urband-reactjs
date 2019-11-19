import React, { Component } from "react";
import { Link } from "react-router-dom";
import DetailHero from "../Music/detail";
import PlayerHero from "../Music/player";
import BannerHero from "../../Banners/bannerHero";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
class AlbumDetail extends Component {
  componentDidMount() {
    let albumid = this.props.location.pathname.split("/").pop();
    this.props.fetchAlbumsDetails(albumid);
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
    fetchAlbumsDetails: albumid =>
      dispatch(actionCreators.fetchAlbumsDetails(albumid))
  };
};

const mapStateToProps = state => {
  return {
    album: state.albumdetails.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
