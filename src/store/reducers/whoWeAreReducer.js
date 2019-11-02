import { FETCH_WHO_WEW_ARE } from '../actions/types';

const initialState ={
    items:[]
}

const whoWeAreReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_WHO_WEW_ARE:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default whoWeAreReducer;

