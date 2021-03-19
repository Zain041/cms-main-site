import { DAILY_INCOME , FETCH_POST , DELETE_POST , UPDATE_POST, FETCH_JOBS} from '../actions/type'

import {db} from '../firebase'

const posts =  db.collection('posts')

const initialState = {
	posts:[],
	jobs:[]
	
	}
    

function reducer(state = initialState, action) {
	switch (action.type) {
		
		case DAILY_INCOME:
			//  console.log(actions.payload);
			return {
			...state,
            };
            
	
        case FETCH_POST: {
		  
			return {
				...state,
				posts: action.payload,
			};
		}
		case FETCH_JOBS: {
		  
			return {
				...state,
				jobs: action.payload,
			};
		}
				   
		case DELETE_POST: {
		
			return {
				...state,
			
			
			};
		}
            

		
		case UPDATE_POST: {
			return {
				...state,
			};
		}
		
       

        default:
            return{
                ...state
 			} 
            
    }
}


export default reducer;