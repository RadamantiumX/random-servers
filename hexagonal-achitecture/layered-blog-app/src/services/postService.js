import { getAllPosts, getPostById, createPost, updatePost, deletePost } from "../repositories/postRepository";

export const getAllPosts = async () => {
  return await getAllPosts();
};

export const getPostById = async (id) => {
  return await getPostById(id);
};

export const createPost = async (post) => {
  return await createPost(post);
};

export const updatePost = async (id, post) => {
  return await updatePost(id, post);
};

export const deletePost = async (id) => {
  return await deletePost(id);
};

