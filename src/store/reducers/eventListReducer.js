import { FETCH_EVENTLIST } from '../actions/types';

const initialState ={
    list:[]
}

const eventListReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_EVENTLIST:
          return{
              ...state,
           
              list: action.value
          }
    default:
        return state; 
  }  
}
export default eventListReducer;

