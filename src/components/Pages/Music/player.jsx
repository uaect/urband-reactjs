import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AudioPlayer, {toggleAudio} from "react-playlist-player";

library.add(faPlay);

class PlayerHero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPlayList: {},
      playsong: false,
      song: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    
  }

  handleClick(item) {
    toggleAudio()
    var tracks = this.props.value.tracks;
    var position = 1;
    var mp3 = [{position: position, songName: item.title, songUrl:"https://admin.urbandmusic.com/storage/" + item.file}];
    var i;
    for (i = 0; i < tracks.length; i++) {
      if(tracks[i].id != item.id){
        position++;
        mp3.push({position: position, songName: tracks[i].title, songUrl:"https://admin.urbandmusic.com/storage/" + tracks[i].file});
      }
    }
    this.setState({ playsong: true });
    this.setState({ song: mp3 });
    this.setState({
      currentPlayList: {
        playlistCoverUrl:"https://admin.urbandmusic.com/storage/" + this.props.value.image,
        playlistName: item.title,
        bandName: this.props.value.title,
        songs: this.state.song,
        type: "album"
      }
    });
  }

  render() {

    const image_url = "https://admin.urbandmusic.com/storage/";
    const album = this.props.value;
    const track = album.tracks;
    const state = this.state;
    
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
                {state.playsong? (
                  <AudioPlayer currentPlayList={state.currentPlayList} onToggle={({audioPlaying}) => ""}/>
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
                              onClick={() => this.handleClick(item)}
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
                  {track
                    ? track.map(item => {
                      return (
                        <div key={item.id}>
                          <div className="clearfix swiper-slide">
                            <div className="single-related-album">
                              <img
                                src={image_url + item.image}
                                alt={image_url + item.image}
                              />
                              <div className="single-related-prod-bottom">
                                <div className="left">
                                  <Link to="/">{item.title}</Link>
                                </div>
                                <div
                                  className="play-bottom"
                                  onClick={() => this.handleClick(item)}
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
