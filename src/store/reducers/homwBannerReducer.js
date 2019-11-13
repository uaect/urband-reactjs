import { FETCH_HOMEBANNER } from '../actions/types';

const initialState ={
    items:[]
}

const homwBannerReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_HOMEBANNER:
          return{
              ...state,
           
              items: action.value
          }
    default:
        return state; 
  }  
}
export default homwBannerReducer;

