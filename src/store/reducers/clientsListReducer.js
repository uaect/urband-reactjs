import { FETCH_CLIENTSLIST } from '../actions/types';

const initialState ={
    items:[]
}

const clientsListReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_CLIENTSLIST:
          return{
              ...state,
           
              items: action.value
          }
    default:
        return state; 
  }  
}
export default clientsListReducer;

