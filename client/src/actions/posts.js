import * as api from "../api";

export const getPosts = () => async (dispatch) => {
    try{
        const response = await api.fetchPosts();
        const {data} = response;

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const response = await api.createPost(post);
        const {data} = response;

        dispatch({ type: "CREATE", payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
        const response = await api.updatePost(id, post);
        const {data} = response;

        dispatch({type: 'UPDATE', payload: data});
    } catch(error){
        console.log(error.message)
    }
}