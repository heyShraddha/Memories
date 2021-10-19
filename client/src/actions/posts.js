import * as api from '../api';

//Action Creators
export const getPost = () => async(dispatch) => {
    try{
        console.log('I am in get Post function action');
        debugger;
        const { data } = await api.fetchPosts();
        console.log('I am in after data thing', data);
        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch(error){

    }
}

export const createPost = (post) => async(dispatch) =>{
    try {
        const { data } = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}