import {Post} from '../models/postModel.js';

export const getAllPosts = async () => {
  return await Post.find({});
};

export const getPostById = async (id) => {
  return await Post.findById(id);
};

export const createPost = async (post) => {
  return await Post.create(post);
};

export const updatePost = async (id, post) => {
  return await Post.findByIdAndUpdate(id, post, { new: true });
};

export const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

