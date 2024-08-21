import React, { useState } from "react";
import Markdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const btnStyle = (props) => ({
  position: "absolute",
  right: "10px",
  top: "10px",
  backgroundColor: props ? "#4CAF50" : "#333",
  color: "#fff",
  border: "none",
  borderRadius: "3px",
  padding: "5px 10px",
  cursor: "pointer",
  fontSize: "12px",
});

const PostContent = ({ post }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code({ inline, className, children, ...props }) {
      const language = className?.match(/language-(\w+)/)?.[1];
      const code = children.toString().trim();
      if (!inline && language) {
        return (
          <div style={{ position: "relative" }}>
            <button onClick={() => handleCopy(code)} style={btnStyle(copied)}>
              {copied ? "Copied!" : "Copy"}
            </button>
            <SyntaxHighlighter
              style={atomDark}
              language={language}
              PreTag="div"
              {...props}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} author={post.author} />
      <Markdown components={customRenderers}>{post.content}</Markdown>
    </article>
  );
};

export default PostContent;
