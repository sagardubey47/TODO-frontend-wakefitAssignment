import axios from 'axios';

const URL = "https://memories-app-datasource.herokuapp.com/posts";

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(`${URL}/createPost`, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);