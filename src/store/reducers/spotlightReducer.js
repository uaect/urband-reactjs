
import { FETCH_SPOTLIGHT } from '../actions/types';

const initialState ={
    items:[]
}

const spotlightReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_SPOTLIGHT:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default spotlightReducer;

