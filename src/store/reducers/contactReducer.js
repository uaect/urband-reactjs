import { FETCH_CONTACT} from '../actions/types';

const initialState ={
    items:[]
}

const contactReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_CONTACT:
          return{
              ...state,
           
              items: action.value
          }
    default:
        return state; 
  }  
}

export default contactReducer;

