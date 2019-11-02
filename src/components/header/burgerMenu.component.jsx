import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faAngleDown)
 
class burgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      childVisible: false
    }
  }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  onclickStepHandler(step) {
    this.setState({childVisible: step});
  }
  
 
  render () {
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '36px',
         
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: 'rgb(0, 0, 0)',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        },
        
      }
    
    return (
    <Menu 
        className={ "urband-menu" } right styles={ styles } 
        width={ '350px' }
        isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)} 
        >
            <NavLink exact to="/index" onClick={() => this.closeMenu()}>Home</NavLink>
            <NavLink to="/"  className="in-array"  onClick={() => this.onclickStepHandler(1)}>About <span className="ico-drop"><FontAwesomeIcon icon={faAngleDown} /></span></NavLink>
              {
                this.state.childVisible===1
                  ? 
                    <div className="sub-drop">
                    <NavLink exact to="/who-we-are" activeClassName="selected" onClick={() => this.closeMenu()}>Who we are</NavLink>
                    <NavLink exact to="/what-we-do" activeClassName="selected" onClick={() => this.closeMenu()}>what we do</NavLink>
                    <NavLink exact to="/gang">the gang</NavLink>
                    </div> 
                    
                  : null
              }
              <NavLink exact to="/event"  className="in-array">Events</NavLink>
              <NavLink exact to="/"  className="in-array" onClick={() => this.onclickStepHandler(2)}>Studio<span className="ico-drop"><FontAwesomeIcon icon={faAngleDown} /></span> </NavLink>
              {
                this.state.childVisible===2
                  ? 
                  <div className="sub-drop">
                      <NavLink to="/artist" onClick={() => this.closeMenu()}>Artists</NavLink>
                      <NavLink to="/clients" onClick={() => this.closeMenu()}>Clients</NavLink>    
                    </div> 
                    
                  : null
              }
               <NavLink exact to="/radio"  className="in-array" onClick={() => this.closeMenu()}>Radio</NavLink>
               <NavLink to="/"  className="in-array">Blog</NavLink>
               <NavLink exact to="/gallery" activeClassName="selected" className="in-array" onClick={() => this.closeMenu()}>Gallery</NavLink>
               <NavLink exact to="/"  className="in-array"  onClick={() => this.onclickStepHandler(3)}>Purchase<span className="ico-drop"><FontAwesomeIcon icon={faAngleDown} /></span> </NavLink>
               {
                this.state.childVisible===3
                  ? 
               <div className="sub-drop">
                  <Link to="/">Event Tickets</Link>
									<Link to="/">Studio Bookings</Link>
									<Link to="/">Merchandise</Link>
                </div>
                  : null
              }
               <NavLink exact to="/contact" className="in-array" activeClassName="selected" onClick={() => this.closeMenu()}>Contact</NavLink>
            
 

   
            
          
          
           
        </Menu>

       
        // <Menu   styles={ styles } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        // <main id="page-wrap">
        // <a id="home" className="menu-item" href="/">Home</a>
        // <a id="about" className="menu-item" href="/about">About</a>
        // <a id="contact" className="menu-item" href="/contact">Contact</a>
        // <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        // </main>
        // </Menu>
     
       

       

    );
  }
}

export default burgerMenu;