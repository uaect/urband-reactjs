import { GETORDEREDLIST } from '../actions/types';

const initialState ={
    orders:[]
}

const getorderReducer = (state = initialState, action) => {
  switch(action.type){
      case GETORDEREDLIST:
          return{
              ...state,
              orders: action.value
          }
    default:
        return state; 
  }  
}
export default getorderReducer;

