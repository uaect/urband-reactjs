import { ADD_CART } from '../actions/types';

const initialState ={
    items:[]
}

const addtocartReducer = (state = initialState, action) => {
  switch(action.type){
      case ADD_CART:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default addtocartReducer;

