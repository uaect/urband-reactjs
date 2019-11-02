import { FETCH_BANNER } from '../actions/types';

const initialState ={
    items:[]
}

const BannerReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_BANNER:
          return{
              ...state,
           
              items: action.value
          }
    default:
        return state; 
  }  
}
export default BannerReducer;

