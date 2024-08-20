import React from "react";
import Markdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "ideal-flare-01",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2024-08-20",
  slug: "getting-started-nextjs",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <Markdown>{DUMMY_POST.content}</Markdown>
    </article>
  );
};

export default PostContent;
