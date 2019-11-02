import { FETCH_CLIENTS } from '../actions/types';

const initialState ={
    items:[]
}

const clientReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_CLIENTS:
          return{
              ...state,
           
              items: action.value
          }
    default:
        return state; 
  }  
}
export default clientReducer;

