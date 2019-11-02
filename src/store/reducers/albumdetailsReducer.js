import { FETCH_ALBUMSDETAILS} from '../actions/types';

const initialState ={
    items:[]
}

const albumdetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALBUMSDETAILS:
            return{
                ...state,
             
                items: action.value
            }
      default:
          return state; 
    }  
  }

  export default albumdetailsReducer;
