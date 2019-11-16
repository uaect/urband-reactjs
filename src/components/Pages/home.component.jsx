import React , {Component} from 'react';
import SliderHero from '../Pages/slider/slider.component'
import H5AudioPlayer from '../AudioPlayer/audioplayer.component'
import MultiCarousel from '../Urband-MultiCarousel/artist-lineup.component'
import MultiCarouselHero from '../Urband-MultiCarousel/multi-carousel'
import PlayAnimation from './RecordAnimation/playAnimation'
import AlbumListHome from './Album/album3d'
import PreviousShowHome from './PreviousShows/previousShow'
import UpcomingShowHome from './UpcomingShows/upcomingShows'
import SpotLight from './SpotLight/spotLight'
class HomePage extends Component{


    render(){

        return (

          <div>
            <SliderHero/>
            <H5AudioPlayer src="https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3" onPlay={e => console.log("onPlay")}/>
            
            <MultiCarousel/>
            <MultiCarouselHero/>
            <PlayAnimation/>
            <AlbumListHome/>
            <PreviousShowHome/>
            <UpcomingShowHome/>
            <SpotLight/>
            
           
         </div>
           
        );
    }
}

export default HomePage;




