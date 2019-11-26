import { combineReducers } from 'redux';
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
import storeListReducer from './storeListReducer';
import storeDetailsReducer from './storeDetailsReducer';
import storeCategoryReducer from './storeCategoryReducer';
import registerReducer from './registerReducer';
import cartReducer from './cartReducer';
import addtocartReducer from './addtocartReducer';
import loginReducer from './loginReducer';
import deletecartReducer from './deletecartReducer';
import eventTicketReducer from './eventTicketReducer';
import homwBannerReducer from './homwBannerReducer';
import getaddressReducer from './getaddressReducer';
import addaddressReducer from './addaddressReducer';
import emiratesReducer from './emiratesReducer';
import emirates1Reducer from './emirates1Reducer';
import previousShowReducer from './previousShowReducer';
import spotlightReducer from './spotlightReducer';
import fetchMenues from './fetchMenues';
import aboutfounded from './aboutfounded';
import eventDetailsReducer from './eventDetailsReducer';
import profileReducer from './profileReducer';
import getorderReducer from './getorderReducer';

export default combineReducers({
    posts: postReducer, // choose any name
    clients: clientReducer,
    clientslist: clientsListReducer,
    events: eventListReducer,
    albums: albumReducer,
    albumdetails: albumdetailsReducer,
    banners: BannerReducer,
    whoweare: whoWeAreReducer,
    gallerypics: gallerypics,
    contact: contactReducer,
    eventdetails: eventDetailReducer,
    storelist: storeListReducer,
    storedetails: storeDetailsReducer,
    storecategory: storeCategoryReducer,
    register: registerReducer,
    addtocart: addtocartReducer,
    cartitems: cartReducer,
    login:loginReducer,
    deletecart:deletecartReducer,
    ticketlist:eventTicketReducer,
    homebanner:homwBannerReducer,
    getaddress:getaddressReducer,
    addressadd:addaddressReducer,
    emirateslist:emiratesReducer,
    area:emirates1Reducer,
    previousshow:previousShowReducer,
    spotlight:spotlightReducer,
    menues:fetchMenues,
    event_details:eventDetailsReducer,
    user:profileReducer,
    order:getorderReducer,
    aboutfounded:aboutfounded,
    user:profileReducer

})
