import React , {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBookmark,faTrophy,faUsers,faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faBookmark,faTrophy,faUsers,faTheaterMasks)

class InfoHero extends Component{

    render(){

        return (
           
         <div>
             <div className="black-hero-bg band-info-section text-center">
                <div className="container">
                <div className="row band-info-items">
                        <div className="col-lg-2 offset-xl-1 col-md-4 col-6">
                            <div className="band-info-item">
                                <div className="band-info-icon">
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                                <h6 className="band-info-title">Founded</h6>
                                <p className="band-info-content">2012</p>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-xl-1 col-md-4 col-6">
                            <div className="band-info-item">
                                <div className="band-info-icon">
                                    <FontAwesomeIcon icon={faTrophy} />
                                </div>
                                <h6 className="band-info-title">Doing</h6>
                                <p className="band-info-content">5+</p>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-xl-1 col-md-4 col-6">
                            <div className="band-info-item">
                                <div className="band-info-icon">
                                    <FontAwesomeIcon icon={faUsers} />
                                </div>
                                <h6 className="band-info-title">Clients</h6>
                                <p className="band-info-content">100+</p>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-xl-1 col-md-4 col-6">
                            <div className="band-info-item">
                                <div className="band-info-icon">
                                    <FontAwesomeIcon icon={faTheaterMasks} />
                                </div>
                                <h6 className="band-info-title">Events</h6>
                                <p className="band-info-content">70+</p>
                            </div>
                        </div>
                       
                       
                </div>
            </div>
        </div>
            
		</div>
           
           
        );
    }
}

export default InfoHero;




