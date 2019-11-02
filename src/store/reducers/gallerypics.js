import { FETCH_GALLERYCATEGORY} from '../actions/types';

const initialState ={
    items:[]
}

const gallerypics = (state = initialState, action) => {
  switch(action.type){
      case FETCH_GALLERYCATEGORY:
          return{
              ...state,
           
              items: action.value
          }
    default:
        return state; 
  }  
}

export default gallerypics;

