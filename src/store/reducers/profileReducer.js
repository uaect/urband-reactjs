import { GETUSER } from '../actions/types';

const initialState ={
    user:[]
}

const profileReducer = (state = initialState, action) => {
  switch(action.type){
      case GETUSER:
          return{
              ...state,
           
              user: action.value
          }  
    default:
        return state; 
  }  
}
export default profileReducer;

