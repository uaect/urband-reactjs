import React, { Component } from "react";
import { hot } from "react-hot-loader";
import StopButton from "../../../assets/img/stopButton.png";
import PlayButton from "../../../assets/img/urbandPlay.png";
import PauseButton from "../../../assets/img/urbandPause.png";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

// const MULTIPLE_SOURCES = [
//   {
//     src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
//     type: "video/mp4"
//   },
//   {
//     src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv",
//     type: "video/ogv"
//   },
//   {
//     src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm",
//     type: "video/webm"
//   }
// ];

class App extends Component {
  state = {
    url: "",
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  };
  componentDidMount() {
    this.setState({ url: this.props.trackUrl });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.props.trackUrl) {
      this.setState({
        url: this.props.trackUrl,
        playing: prevState.playing ? true : false
      });
    }
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
    this.props.action();
  };

  handleStop = () => {
    this.setState({ url: null, playing: false });
    this.props.action("stop");
  };

  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null
      },
      () => this.load(url)
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  handleEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = state => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };

  handleDuration = duration => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  //   handleClickFullscreen = () => {
  //     screenfull.request(findDOMNode(this.player))
  //   }

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      playbackRate,
      pip
    } = this.state;

    return (
      <div className="BottomPlayerTp1 ">
        <div className="BottomPlayerTp1Cnt header_player ">
          <div className="row d-flex align-items-center">
            <div className="col-auto">
              <div className="">
                <img
                  className="ArtistImgTp1"
                  src={this.props.ArtistImage}
                  alt="ArtistImgTp1"
                />
              </div>
            </div>
            <div className="col-auto d-none-mobile">
              <div className="">
                <h4 className="track-name">{this.props.ArtistTittle}</h4>
                <span className="artist-name">Latest Release</span>
              </div>
            </div>
            <div className="col-auto">
              {playing ? (
                <img
                  className="PlayerIconTp1"
                  onClick={this.handlePlayPause}
                  src={PauseButton}
                  alt=""
                />
              ) : (
                <img
                  className="PlayerIconTp1"
                  onClick={this.handlePlayPause}
                  src={PlayButton}
                  alt=""
                />
              )}
            </div>

            <div className="col">
              <div>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step="any"
                  value={played}
                  onMouseDown={this.handleSeekMouseDown}
                  onChange={this.handleSeekChange}
                  onMouseUp={this.handleSeekMouseUp}
                />

                <ReactPlayer
                  ref={this.ref}
                  className="react-player"
                  width="100%"
                  height="100%"
                  url={url}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={light}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log("onReady")}
                  onStart={() => console.log("onStart")}
                  onPlay={this.handlePlay}
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log("onBuffer")}
                  onSeek={e => console.log("onSeek", e)}
                  onEnded={this.handleEnded}
                  onError={e => console.log("onError", e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration}
                />
              </div>
            </div>
            <div className="col-auto d-none-mobile">
              <div>
                <div className="volumeControllerBox d-flex align-items-center">
                  <FontAwesomeIcon icon={faVolumeUp} className="mr-4" />
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step="any"
                    value={volume}
                    onChange={this.handleVolumeChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-auto">
              <img
                className="PlayerIconTp1"
                src={StopButton}
                onClick={this.handleStop}
                alt="PlayerIconTp1"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
