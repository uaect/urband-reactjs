import { FETCH_STOREDETAILS } from '../actions/types';

const initialState ={
    items:[]
}

const storeDetailsReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_STOREDETAILS:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default storeDetailsReducer;

