import React, { Component } from "react";
import SliderHero from "../Pages/slider/slider.component";
import MultiCarousel from "../Urband-MultiCarousel/artist-lineup.component";
import MultiCarouselHero from "../Urband-MultiCarousel/multi-carousel";
import PlayAnimation from "./RecordAnimation/playAnimation";
import AlbumListHome from "./Album/album3d";
import PreviousShowHome from "./PreviousShows/previousShow";
import UpcomingShowHome from "./UpcomingShows/upcomingShows";
import SpotLight from "./SpotLight/spotLight";
import { connect } from "react-redux";
class HomePage extends Component {
  render() {
    return (
      <div>
        <SliderHero />
        {this.props.homebanners ? (
          <div>
            <MultiCarousel />
            <MultiCarouselHero />
            <PlayAnimation />
            <AlbumListHome />
            <PreviousShowHome />
            <UpcomingShowHome />
            <SpotLight />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    homebanners: state.homebanner.items
  };
};
export default connect(mapStateToProps)(HomePage);
