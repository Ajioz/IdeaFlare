import React from "react";
import AllPosts from "../../components/Posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

const AllPostsPage = (props) => {
  return <AllPosts posts={props.posts} />;
};

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
}
export default AllPostsPage;
