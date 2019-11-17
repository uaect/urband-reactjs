import { EVENTDETAIL } from '../actions/types';

const initialState ={
    eventdetails:[]
}

const eventDetailsReducer = (state = initialState, action) => {
  switch(action.type){
      case EVENTDETAIL:
          return{
              ...state,
           
              eventdetails: action.value
          }
    default:
        return state; 
  }  
}
export default eventDetailsReducer;

