/*

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

const getPostData = async(fileName) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = await fs.readdir(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ""); //removes the file extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPosts = async() => {
  const postFiles = await fs.readdir(postDirectory);
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
);
return sortedPosts;
};

export const getFeaturedPost = async() => {
    const allPosts = await getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);
    return featuredPosts;
};

*/

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

const getPostData = async (fileName) => {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = await fs.readFile(filePath, "utf-8"); // Corrected to readFile
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ""); // Removes the file extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

export const getAllPosts = async () => {
  const postFiles = await fs.readdir(postDirectory);
  const allPosts = await Promise.all(
    postFiles.map((postFile) => getPostData(postFile))
  ); // Corrected to await Promise.all

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getFeaturedPost = async () => {
  const allPosts = await getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
