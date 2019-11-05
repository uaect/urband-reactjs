import { FETCH_STORECATEGORY } from '../actions/types';

const initialState ={
    items:[]
}

const storeCategoryReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_STORECATEGORY:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default storeCategoryReducer;

