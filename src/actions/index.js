import axios from '../apis/jsonplaceholder';

export const fetchPosts = () => {
    return async (dispatch,getState)=>{
        let res = await axios.get('posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload:res.data
        });
    };
    
};
