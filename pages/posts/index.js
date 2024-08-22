import React from "react";
import Head from "next/head";
import AllPosts from "../../components/Posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>Blog detail</title>
        <meta name="description" content="Find tutorial posts foe your need" />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
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
