
import { FOUNDED } from '../actions/types';

const initialState ={
    items:[]
}

const aboutfounded = (state = initialState, action) => {
  switch(action.type){
      case FOUNDED:
          return{
              ...state,
           
              items: action.value
          }  
    default:
        return state; 
  }  
}
export default aboutfounded;

