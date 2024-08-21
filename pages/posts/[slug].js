import React from "react";
import PostContent from "../../components/Posts/post-details/post-content";
import { getAllPosts } from "../../lib/post-util";

const PostDetailPage = () => {
  return <PostContent />;
};

export async function getStaticProps(context) {
  // const slug = context.params.slug;
  const { params: { slug } } = context;

  const postDetail = await getPostData(slug);

  return {
    props: {
      post: postDetail,
    },
    revalidate: 600
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const pathId = posts.map((post) => post.slug);
  const paths = pathId.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: true,
  };
}

export default PostDetailPage;
