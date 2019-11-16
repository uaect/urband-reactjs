
import { ADDADDRESS } from '../actions/types';

const initialState ={
    items:[]
}

const addaddressReducer = (state = initialState, action) => {
  switch(action.type){
      case ADDADDRESS:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default addaddressReducer;

