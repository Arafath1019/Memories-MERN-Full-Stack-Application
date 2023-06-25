import { CREATE, UPDATE, FETCH_ALL, DELETE, FETCH_BY_SEARCH } from "../constants/actionTypes";
import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    const { data } = response;
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try{
    const {data: {data}} = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: data})
  } catch(error){
    console.log(error);
  } 
}

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.createPost(post);
    const { data } = response;

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, post);
    const { data } = response;

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const response = await api.likePost(id);
    const { data } = response;

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
