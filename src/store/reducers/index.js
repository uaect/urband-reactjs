import {combineReducers} from 'redux'; 
import postReducer from './postReducer'; // here postReducer is like State includes return some objects 
import clientReducer from './clientReducer';
import clientsListReducer from './clientsListReducer';
import eventListReducer from './eventListReducer';
import albumReducer from './albumReducer';
import albumdetailsReducer from './albumdetailsReducer'
import BannerReducer from './BannerReducer';
import whoWeAreReducer from './whoWeAreReducer';
import gallerypics from './gallerypics';
import contactReducer from './contactReducer';
import eventDetailReducer from './eventDetailReducer';
export default combineReducers({
    posts: postReducer, // choose any name
    clients: clientReducer,
    clientslist: clientsListReducer,
    events: eventListReducer,
    albums:albumReducer,
    albumdetails:albumdetailsReducer,
    banners:BannerReducer,
    whoweare:whoWeAreReducer,
    gallerypics:gallerypics,
    contact:contactReducer,
    eventdetails:eventDetailReducer

})
