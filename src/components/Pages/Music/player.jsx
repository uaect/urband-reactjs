import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FixedBottomPlayer from "../../uicomponents/PlayerBottom/fixedBottomPlayer.component";

library.add(faPlay);

class PlayerHero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPlayList: {}
    };
    this.PlayVideoHandler = this.PlayVideoHandler.bind(this);
  }

  componentDidMount() {

  }

  gotoAlbumDetails(artistid) {
    window.location.href = "/albums/detail/" + artistid;
  }

  PlayVideoHandler(status) {
    if (status == "stop") {
      this.setState({ bottomPlayerActivated: "hide" });
    }
  }

  handleChangeSong(item) {
    this.setState({
      currentPlayList: {
        playlistCoverUrl: "https://admin.urbandmusic.com/storage/" + this.props.value.image,
        playlistName: item.title,
        bandName: this.props.value.title,
        song: "https://admin.urbandmusic.com/storage/" + item.file
      }
    });
    this.setState({ bottomPlayerActivated: "show" });
  }

  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    const album = this.props.value;
    const track = album.tracks;
    const relatedAlbums = album.relatedAlbums;

    const responsive = {
      superLargeDesktop: {
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
      <div>
        <section className="related-album-single single-album-player">
          <div className="container">
            <div className="row">
              <div className="style-fullwidth">
                {/* {state.playsong ? (
                  <AudioPlayer currentPlayList={state.currentPlayList} onToggle={({ audioPlaying }) => ""} />
                ) : (
                    ""
                  )} */}
                {this.state.bottomPlayerActivated == "show" ? (
                  <FixedBottomPlayer
                    action={this.PlayVideoHandler}
                    ArtistImage={this.state.currentPlayList.playlistCoverUrl}
                    ArtistTittle={this.state.currentPlayList.playlistName}
                    ArtistBrand={this.state.currentPlayList.bandName}
                    trackUrl={this.state.currentPlayList.song}
                  />
                ) : (
                    ""
                  )}

                <div className="jp-playlist style-fullwidth">
                  <div className="section-title m-0">
                    <h2>
                      Track <span>List</span>
                    </h2>
                  </div>
                  <ul>
                    {track
                      ? track.map(item => {
                        return (
                          <li
                            className="jp-playlist-current style-fullwidth"
                            key={item.id}
                          >
                            <div
                              className="jp-album-me"
                              onClick={() => this.handleChangeSong(item)}
                            >
                              <div className="cell-play-icons">
                                <FontAwesomeIcon icon={faPlay} />
                              </div>
                              <span className="jp-artist">{item.name}</span>
                            </div>
                          </li>
                        );
                      })
                      : ""}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related-album-single bottom">
          <div className="container">
            <div className="row">
              <div className="style-fullwidth">
                <div className="section-title m-0">
                  <h2>
                    RELATED <span>ALBUM</span>
                  </h2>
                </div>
                <Carousel
                  responsive={responsive}
                  transitionDuration={1000}
                  autoPlaySpeed={2000}
                  autoPlay={true}
                  infinite={true}
                >
                  {relatedAlbums
                    ? relatedAlbums.map(item => {
                      return (
                        <div key={item.id}
                          onClick={() => this.gotoAlbumDetails(item.id)}
                        >
                          <div className="clearfix swiper-slide">
                            <div className="single-related-album">
                              <img
                                src={image_url + item.image}
                                alt={image_url + item.image}
                              />
                              <div className="single-related-prod-bottom">
                                <div className="left">
                                  {item.title}
                                </div>
                                <div
                                  className="play-bottom"
                                >
                                  {" "}
                                  <FontAwesomeIcon icon={faPlay} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                    : ""}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PlayerHero;