import { LOGIN } from '../actions/types';

const initialState ={
    items:[],
    isLoggedIn: false
}

const loginReducer = (state = initialState, action) => {
  switch(action.type){
      case LOGIN:
          return{
              ...state,
           
              items: action.value,
              isLoggedIn: true,
          }  
    default:
        return state; 
  }  
}
export default loginReducer;

