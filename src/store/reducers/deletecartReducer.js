import { DELETE_CART } from '../actions/types';

const initialState ={
    items:[]
}

const deletecartReducer = (state = initialState, action) => {
  switch(action.type){
      case DELETE_CART:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default deletecartReducer;

