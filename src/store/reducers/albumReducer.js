import { FETCH_ALBUMS} from '../actions/types';

const initialState ={
    items:[]
}

const albumReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_ALBUMS:
          return{
              ...state,
           
              items: action.value
          }
    default:
        return state; 
  }  
}

export default albumReducer;

