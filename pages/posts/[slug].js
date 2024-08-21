import React from "react";
import PostContent from "../../components/Posts/post-details/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-util";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
};

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const postDetail = await getPostData(slug);

  return {
    props: {
      post: postDetail,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFileNames = await getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}

export default PostDetailPage;
