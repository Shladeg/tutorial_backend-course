import mongoose from "mongoose";

const { Schema, model } = mongoose;

const Post = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String },
});

export default model("Post", Post);
