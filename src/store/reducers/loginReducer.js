import { LOGIN } from '../actions/types';

const initialState ={
    items:[]
}

const loginReducer = (state = initialState, action) => {
  switch(action.type){
      case LOGIN:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default loginReducer;

