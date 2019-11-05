import React , {Component} from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../header/header.component.css';
import Logo from '../../assets/img/logo_5.png';
import BurgerMenu from '../header/burgerMenu.component'

class Header extends Component{


    render(){
        return (

        <div className="AppHeader">
            <header className="header header-magic-line headroom headroom--not-bottom headroom--pinned headroom--top">
                <div className="tim-container clearfix">
                <div className="header-magic-line-inner clearfix">
                    <div id="site-logo" className="float-left">
                    <NavLink to="/" className="logo-main">
                        <img src={Logo} alt="hero urband"/>
                    </NavLink>
                    </div>
                    <div className="nav">
                        <ul className="group" id="header-menu-magic-line">
                        <li>
                        <NavLink  to="/index" activeClassName="selected" className="in-array">
                           Home 
                        </NavLink>
                        </li>
                        <li className="menu-item-has-children in-array">
                              Studio
                            <ul className="sub-menu">
                            <li><Link to="/artist">Artists</Link></li>
                            <li><Link to="/clients">Clients</Link></li>
                            </ul>	
						</li>
                        <li>
                                <NavLink  to="/radio"  className="in-array" activeClassName="selected">Radio</NavLink>	
						</li>
                        <li className="menu-item-has-children">
                        <NavLink  to="/event-list" activeClassName="selected" className="in-array">Events
						</NavLink>			
						</li>
								
                        <li>
                        <NavLink to="/who-we-are" activeClassName="selected" className="in-array">About</NavLink>
                        </li>
                    
                        <li>
                        <NavLink  exact to="/vlog"  className="in-array">Vlog</NavLink>
                            
                        </li>
                        <li><NavLink  to="/gallery" activeClassName="selected" className="in-array">Gallery</NavLink></li>
                        <li className="menu-item-has-children in-array">
                        Purchase
                            <ul className="sub-menu">
                            <li><Link to="/coming-soon">Event Tickets</Link></li>
                            <li><Link to="/coming-soon">Studio Bookings</Link></li>
                            <li><Link to="/store">Merchandise</Link></li>
                            </ul>
                      
                        </li>
                        <li>
                        <NavLink  to="/contact" className="in-array" activeClassName="selected">Contact</NavLink>
                        </li>
                        </ul>
                    </div>
                    
                    </div>  
                </div>
            </header>
            <BurgerMenu/>
        </div>

        


           
        );
    }
}

export default Header;




