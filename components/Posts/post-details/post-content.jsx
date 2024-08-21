import React from "react";
import Markdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} author={post.author} />
      <Markdown>{post.content}</Markdown>
    </article>
  );
};

export default PostContent;
