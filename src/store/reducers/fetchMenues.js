
import { FETCH_MENUES } from '../actions/types';

const initialState ={
    items:[]
}

const fetchMenues = (state = initialState, action) => {
  switch(action.type){
      case FETCH_MENUES:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default fetchMenues;

