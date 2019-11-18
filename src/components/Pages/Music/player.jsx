import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AudioPlayer from 'react-playlist-player'


library.add(faPlay)

class PlayerHero extends Component {

    // constructor(props){
    //     super(props)
    // }


    constructor(props) {
        super(props);
        this.state = {
            currentPlayList: {},
            playsong: false,
            song: {}
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(item) {
        this.setState({ playsong: true });
        this.setState({ song: item });

        this.setState({
            currentPlayList: {
                playlistCoverUrl: 'https://e-cdns-images.dzcdn.net/images/playlist/ab4e61f7c223dbd66e06465bc0452b01/264x264-000000-80-0-0.jpg',
                playlistName: item.name,
                bandName: item.name,
                songs: [
                    {
                        position: '1',
                        songName: item.name,
                        songUrl: 'https://admin.urbandmusic.com/storage/' + item.file
                    },

                ],
                type: 'album'
            },


        })
        //console.log(this.state.currentPlayList);

    }
    componentDidMount() {

    }

    render() {
        const image_url = "https://admin.urbandmusic.com/storage/";
        const playsong = this.state.playsong;
        //const image_url = "https://admin.urbandmusic.com/storage/"
        const album = this.props.value;
        const track = album.tracks;
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 5,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };


        return (

            <div>
                <section className="related-album-single single-album-player">
                    <div className="container">
                        <div className="row">
                            <div className='style-fullwidth'>
                                {/* <div className="player-top-btn">
                                        <button className='tim-btn play-btn-large' onClick={this.loadPlayList}> Load playlist</button>
                                        <button class="tim-btn">Share</button>
                                    </div> */}
                                {playsong
                                    ? <AudioPlayer currentPlayList={this.state.currentPlayList} />
                                    : ""}

                                {/* <AudioPlayer currentPlayList={this.state.currentPlayList} /> */}


                                <div className="jp-playlist style-fullwidth">
                                    <div className="section-title m-0">
                                        <h2>Track <span>List</span></h2>
                                    </div>
                                    <ul>

                                        {track ? track.map(item => {
                                            return (
                                                <li className="jp-playlist-current style-fullwidth" key={item.id}>
                                                    <div className="jp-album-me" onClick={() => this.handleClick(item)}><div className="cell-play-icons" ><FontAwesomeIcon icon={faPlay} /></div><span className="jp-artist">{item.name}</span></div>
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
                            <div className='style-fullwidth'>
                                <div className="section-title m-0">
                                    <h2>RELATED <span>ALBUM</span></h2>
                                </div>
                                <Carousel responsive={responsive}>
                                    {track ? track.map(item => {
                                        return (
                                            <div key={item.id} className="clearfix swiper-slide">
                                                <div className="single-related-album">

                                                    <img  src={image_url + item.image} alt="" />

                                                    <div className="single-related-prod-bottom">
                                                        <div className="left">
                                                            <Link to="/">{item.title}</Link>
                                                            {/* <p>6 Tracks</p> */}
                                                        </div>
                                                        <div className="play-bottom" onClick={() => this.handleClick(item)} > <FontAwesomeIcon icon={faPlay} /></div>
                                                    </div>
                                                </div>
                                            </div>);
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




