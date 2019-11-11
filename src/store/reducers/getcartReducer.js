import { GET_CART } from '../actions/types';

const initialState ={
    items:[]
}

const getcartReducer = (state = initialState, action) => {
  switch(action.type){
      case GET_CART:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default getcartReducer;

