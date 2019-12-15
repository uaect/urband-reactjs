import { GETSOCIAL } from '../actions/types';

const initialState ={
    items:[]
}

const socialReducer = (state = initialState, action) => {
  switch(action.type){
      case GETSOCIAL:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default socialReducer;

