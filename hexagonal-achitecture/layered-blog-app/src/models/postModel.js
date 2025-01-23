import mongoose from "mongoose";

export const Post = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
}, {
  timestamps: true
});

