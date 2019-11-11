import React, { Component } from "react";
//import ComingSoon from "../Pages/comingsoon.component";
import HLSPlayer from "react-hls";
import BannerHero from "../Banners/bannerHero";

class Radio extends Component {
  render() {
    //const source = 'http://www.streambox.fr/playlists/test_001/stream.m3u8';

    return (
      <div>
        <BannerHero title={"radio"} />
        <div className="section-padding full-wrap">
          <div className="row no-gutters">
            <div className="col-md-2">
              <img
                src={require("../../media/background/tracks-left.png")}
                alt="thum"
              />
              <div class="bubble-wrap-right">
                <div className="bubble icon-1"></div>
                <div className="bubble icon-2 "></div>
                <div className="bubble icon-3"></div>
                <div className="bubble icon-4"></div>

                <div className="bubble icon-5"></div>
                <div className="bubble icon-2 "></div>
                <div className="bubble icon-4"></div>
                <div className="bubble icon-5"></div>

                <div className="bubble icon-1"></div>
                <div className="bubble icon-2 "></div>

                <div className="bubble icon-5"></div>
                <div className="bubble icon-3"></div>
                <div className="bubble icon-3"></div>

                <div className="bubble icon-2 "></div>
                <div className="bubble icon-3"></div>
                <div className="bubble icon-1"></div>
                <div className="bubble icon-2 "></div>
                <div className="bubble icon-3"></div>
                <div className="bubble icon-4"></div>
                <div className="bubble icon-4"></div>
                <div className="bubble icon-1"></div>

                <div className="bubble icon-5"></div>

                <div className="bubble icon-1"></div>
                <div className="bubble icon-2 "></div>
              </div>
            </div>

            <div className="col-md-8 radio-go">
              <div className="text-center page-head hero-color">
                Music Never Ends
              </div>
              <div className="text-center radio-welcome">
                tune in to the best internet radio stations live and feel our
                vibes
              </div>

              <div className="radio-live-wrap">
                <HLSPlayer
                  url={
                    "https://urband-t891.nodeboost.io/streams/hls/live/urband.m3u8"
                  }
                  type="audio/hls"
                />
              </div>
            </div>

            <div className="col-md-2 text-right">
              <img
                src={require("../../media/background/tracks-right.png")}
                alt="thum"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Radio;
