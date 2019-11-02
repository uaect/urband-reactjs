import React , { Component } from 'react'
// import ReactDOM from "react-dom";
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './store'
import Header from './components/header/header'
import Footer from './components/Footer/footer.component'
import HomePage from './components/Pages/home.component'
import WhoWeAre from './components/Pages/who-we-are.component'
import EventList from './components/Pages/event-list.component'
import EventDetail from './components/Pages/event-detail.component'
import Artist from './components/Pages/artist.component'
import Contact from './components/Pages/contact.component'
import Clients from './components/Pages/clients.component'
import Gallery from './components/Pages/gallery.component'
import AlbumHome from './components/Pages/Album/album3d'
import AlbumDetail from './components/Pages/Album/albumDetail'
import Vlog from './components/Pages/vlog.component'
import Radio from './components/Pages/radio.component'
import ShopHome from './components/Pages/UrbandStore/home.component'
import ShopDetail from './components/Pages/UrbandStore/detail.component'
import TicketDetail from './components/Pages/TicketBook/ticketDetail'
import ComingSoon from './components/Pages/comingsoon.component'
import './assets/intro/css/intro.css';
import './assets/css/app.css';


class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}
const Scroll = withRouter(ScrollToTop);


class App extends Component{

  render(){

    return (
      <Provider store={store}>
      <Router>
        <div className="AppContainer hero-site">
          <Header />
          <Scroll>
              <Switch>
                
                <Route exact path="/index" component={HomePage} />
                <Route path="/who-we-are" component={WhoWeAre} />
                <Route path="/event-list" component={EventList} />
                <Route path="/event" component={EventDetail} />
                <Route path="/artist" component={Artist} />
                <Route path="/contact" component={Contact} />
                <Route path="/clients" component={Clients} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/radio" component={Radio} />
                <Route path="/store" component={ShopHome} />
                <Route path="/detail" component={ ShopDetail} />
                <Route path="/coming-soon" component={ComingSoon} />
                <Route path="/albums" exact component={ AlbumHome } />
                <Route path={"/albums/detail/:id"} component={ AlbumDetail} />
                <Route path="/vlog" component={ Vlog} />
                <Route path={"/ticket-detail"} component={ TicketDetail} />
              
                <HomePage/>
                <WhoWeAre/>
                <EventList/>
                <EventDetail/>
                <Artist/>
                <Contact/>
                <Clients/>
                <Gallery/>
                <Radio/>
                <ComingSoon/>
              </Switch>
            </Scroll>
          <Footer/>
         </div>
      </Router>
      </Provider>
    );
  }
}


export default App;
