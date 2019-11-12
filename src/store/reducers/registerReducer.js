import { REGISTER } from '../actions/types';

const initialState ={
    items:[]
}

const registerReducer = (state = initialState, action) => {
  switch(action.type){
      case REGISTER:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default registerReducer;

