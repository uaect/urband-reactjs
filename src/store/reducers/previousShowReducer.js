
import { PREVIOUSSHOW } from '../actions/types';

const initialState ={
    items:[]
}

const previousShowReducer = (state = initialState, action) => {
  switch(action.type){
      case PREVIOUSSHOW:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default previousShowReducer;

