import { FETCH_POSTS } from '../actions/types';

const initialState ={
    items:[]
}

const artistReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_POSTS:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default artistReducer;

