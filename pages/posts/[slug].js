import React from "react";
import Head from "next/head";
import PostContent from "../../components/Posts/post-details/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-util";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
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
    fallback: false,
  };
}

export default PostDetailPage;
