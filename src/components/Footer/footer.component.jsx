import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF,faTwitter,faSoundcloud,faYoutube,faLinkedin,faInstagram,faApple,faVimeo} from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faFacebookF,faTwitter,faSoundcloud,faYoutube,faLinkedin,faInstagram,faApple,faVimeo)


class Footer extends Component {
   
    render () {
      return (
        
        <footer id="footer-3" className="AppFooter">
        <div className="container">
            <div className="d-flex justify-content-center row">
                <div className="col-xl-10">
                    
                    <div className="footer-three-bottom">
                        <div className="footer-three-left">
                            <Link to="/">
                        <img src={require('../../assets/img/logo_5_dark.png')} alt="" className="foot-logo"/>
                   </Link>
                            <p>There are many variations of passages of Lorem Ipsum available but the majority. We are proud there are many variations of passages of Lorem Ipsum available but the majority of the users does use this.</p>
                        </div>
                        <div className="footer-three-right">
                            <ul className="footer-three-menu">
                                <li><Link to="/">Rules</Link></li>
                                <li><Link to="/">Terms of use</Link></li>
                                <li><Link to="/">Tickets</Link></li>
                                <li><Link to="/">policy</Link></li>
                            </ul>
                            <div className="footer-social-three">
                                <ul>
                                    <li><Link to="/"> <FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                    <li><Link to="/"> <FontAwesomeIcon icon={faYoutube} /></Link></li>
                                    <li><Link to="/"> <FontAwesomeIcon icon={faTwitter} /></Link></li>
                                    <li><Link to="/"> <FontAwesomeIcon icon={faLinkedin} /></Link></li>
                                    <li><Link to="/"> <FontAwesomeIcon icon={faInstagram} /></Link></li>
                                    <li><Link to="/"> <FontAwesomeIcon icon={faApple} /></Link></li>
                                    <li><Link to="/"> <FontAwesomeIcon icon={faVimeo} /></Link></li>
                                    <li><Link to="/"> <FontAwesomeIcon icon={faSoundcloud} /></Link></li>
                                    
                                   
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
               
            </div>
         
        </div>
    
    </footer>
          
	
	
			
	
         
       
          
        
      )
    }
  }
  export default Footer;