import { FETCH_STORELIST } from '../actions/types';

const initialState ={
    items:[]
}

const storeListReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_STORELIST:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default storeListReducer;

