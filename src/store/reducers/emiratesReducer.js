import { GETEMIRATES } from '../actions/types';

const initialState ={
    emirates:[]
}

const emiratesReducer = (state = initialState, action) => {
  switch(action.type){
      case GETEMIRATES:
          return{
              ...state,
           
              emirates: action.value
          }
    default:
        return state; 
  }  
}
export default emiratesReducer;

