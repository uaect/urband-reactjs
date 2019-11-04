import React, { Component } from "react";
import ComingSoon from "../Pages/comingsoon.component";
import BannerHero from "../Banners/bannerHero";
class Vlog extends Component {

  render() {
    let styles = {
      minHeight: '400px',
      width:'100%',
      backgroundImage: "url('https://149354727.v2.pressablecdn.com/wp-content/uploads/2017/12/jason-rosewell-60014-1-800x600.jpg')"
    };
    return (
      <div>
     <BannerHero title={"vlog"} />

        <section className="blog-posts video-list">
          <div className="container">
          <ComingSoon/>
          </div>
        </section>
      </div>
    );
  }
}

export default Vlog;
