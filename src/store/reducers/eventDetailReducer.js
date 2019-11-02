import { FETCH_EVENTDETAIL } from '../actions/types';

const initialState ={
    eventdetails:[]
}

const eventDetailReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_EVENTDETAIL:
          return{
              ...state,
           
              eventdetails: action.value
          }
    default:
        return state; 
  }  
}
export default eventDetailReducer;

