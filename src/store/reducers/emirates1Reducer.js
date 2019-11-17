import { GETEMIRATES1 } from '../actions/types';

const initialState ={
    emirates:[]
}

const emirates1Reducer = (state = initialState, action) => {
  switch(action.type){
      case GETEMIRATES1:
          return{
              ...state,
           
              emirates: action.value
          }
    default:
        return state; 
  }  
}
export default emirates1Reducer;

