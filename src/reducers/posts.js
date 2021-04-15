
// eslint-disable-next-line import/no-anonymous-default-export
import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKEPOST} from "../constants/actionTypes";


// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {

   switch(action.type) {
       case CREATE:
           return [...posts, action.payload];

       case FETCH_ALL:
           return action.payload; 

       case UPDATE:
       case LIKEPOST:    
            return posts.map((post) => post.id === action.id ? action.payload : post )
       
       case DELETE:
             return posts.filter((post) => post._id !== action.payload);     
       default:
           return posts;
   }
}