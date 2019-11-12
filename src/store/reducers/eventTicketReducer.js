import { FETCH_EVENTTICKET } from '../actions/types';

const initialState ={
    list:[]
}

const eventTicketReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_EVENTTICKET:
          return{
              ...state,
           
              list: action.value
          }
    default:
        return state; 
  }  
}
export default eventTicketReducer;

