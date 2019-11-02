import React , {Component} from 'react';
import Carousel from "react-multi-carousel";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import DetailHero from './Music/detail'
import PlayerHero from './Music/player'

library.add(faPlay)


class Radio extends Component{


    render(){

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

            <section className="page-header artist-banner">
                    <div className="tim-container">
                        <div className="page-header-title text-center">
                        <h3>Broadcast</h3>
                        <h2>& RADIO</h2>
                        </div>

                        <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                            <span>/</span>
                            <span>Radio</span>
                        </div>

                    </div>
		
                </section>

               <DetailHero/>
               <PlayerHero/>

       


        
		<section className="related-album-single">
			<div className="container">
				<div className="section-title">
					<h2>RELATED <span>ALBUM</span></h2>
				</div>
                <Carousel responsive={responsive}>
                    <li className=" clearfix swiper-slide ">
                        <div className="single-related-album">
                           
                        <img src={require('../../media/album/ra1.jpg')} alt=""/>
                   
                            <div className="single-related-prod-bottom">
                                <div className="left">
                                    <Link>Funny Litle World</Link>
                                    <p>6 Tracks</p>
                                </div>
                                <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                            </div>
                        </div>
                    </li>
                    <li className=" clearfix swiper-slide ">
                        <div className="single-related-album">
                           
                        <img src={require('../../media/album/ra1.jpg')} alt=""/>
                    
                            <div className="single-related-prod-bottom">
                                <div className="left">
                                    <Link>Funny Litle World</Link>
                                    <p>6 Tracks</p>
                                </div>
                                <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                            </div>
                        </div>
                    </li>
                    <li className=" clearfix swiper-slide ">
                        <div className="single-related-album">
                            
                        <img src={require('../../media/album/ra2.jpg')} alt=""/>
                    
                            <div className="single-related-prod-bottom">
                                <div className="left">
                                    <Link>Funny Litle World</Link>
                                    <p>6 Tracks</p>
                                </div>
                                <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                            </div>
                        </div>
                    </li>
                    <li className=" clearfix swiper-slide ">
                        <div className="single-related-album">
                            
                        <img src={require('../../media/album/ra3.jpg')} alt=""/>
                    
                            <div className="single-related-prod-bottom">
                                <div className="left">
                                    <Link>Funny Litle World</Link>
                                    <p>6 Tracks</p>
                                </div>
                                <Link className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                            </div>
                        </div>
                    </li>
                    <li className=" clearfix swiper-slide ">
                        <div className="single-related-album">
                           
                        <img src={require('../../media/album/ra4.jpg')} alt=""/>
                   
                            <div className="single-related-prod-bottom">
                                <div className="left">
                                    <Link>Funny Litle World</Link>
                                    <p>6 Tracks</p>
                                </div>
                                <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                            </div>
                        </div>
                    </li>
                    <li className=" clearfix swiper-slide ">
                        <div className="single-related-album">
                          
                        <img src={require('../../media/album/ra4.jpg')} alt=""/>
                   
                            <div className="single-related-prod-bottom">
                                <div className="left">
                                    <Link>Funny Litle World</Link>
                                    <p>6 Tracks</p>
                                </div>
                                <Link  className="play-bottom"> <FontAwesomeIcon icon={faPlay} /></Link>
                            </div>
                        </div>
                    </li>
                </Carousel>
               
            </div>
        </section>                
         



      
       
				

	
		</div>
           
           
        );
    }
}

export default Radio;




