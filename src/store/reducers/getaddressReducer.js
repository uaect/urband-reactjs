import { GETADDRESS } from '../actions/types';

const initialState ={
    address:[]
}

const getaddressReducer = (state = initialState, action) => {
  switch(action.type){
      case GETADDRESS:
          return{
              ...state,
           
              address: action.value
          }
    default:
        return state; 
  }  
}
export default getaddressReducer;

