import React, { Component } from "react";
import ComingSoon from "../Pages/comingsoon.component";
import BannerHero from "../Banners/bannerHero";
class Vlog extends Component {
  render() {
    return (
      <div>
        <BannerHero title={"vlog"} />

        <section className="blog-posts video-list">
          <div className="container">
            <ComingSoon />
          </div>
        </section>
      </div>
    );
  }
}

export default Vlog;
