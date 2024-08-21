import React from "react";
import Image from "next/image";
import classes from "./post-header.module.css";

const PostHeader = (props) => {
  const { author, title, image } = props;
  return (
    <div className={classes.headerContainer}>
      <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} width={200} height={150} alt={title} />
      </header>
      <div className={classes.author}>
        <span>By:</span> &nbsp;
        <p>{author}</p>
      </div>
    </div>
  );
};

export default PostHeader;
