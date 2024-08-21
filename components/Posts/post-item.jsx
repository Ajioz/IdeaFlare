import React from "react";
import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div
          className={classes.image}
          style={{ position: "relative", width: "100%", height: "300px" }}
        >
          <Image
            src={imagePath}
            alt={title}
            fill // Use the fill prop for responsive images
            style={{ objectFit: "cover" }} // Ensure the image covers the container
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
