import {combineReducers} from 'redux';

const fetchPostsReducer = (posts = [], action)=>{
    if(action.type==='FETCH_POSTS') {
        console.log('fetching posts',action.payload);
        return action.payload;
    }
    return posts;
};

export default combineReducers({
posts:fetchPostsReducer
});