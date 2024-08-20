import React from "react";
import Hero from "../components/HomePage/hero";
import FeaturedPost from "../components/HomePage/featured";

const DUMMY_POST = [
  {
    title: "ideal-flare-01",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the react framework for production, which makes building good app sweet with perfect SEO",
    date: "2024-08-20",
    slug: "getting-started-nextjs",
  },
  {
    title: "ideal-flare-02",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the react framework for production, which makes building good app sweet with perfect SEO",
    date: "2024-08-20",
    slug: "getting-started-nextjs2",
  },
  {
    title: "ideal-flare-03",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the react framework for production, which makes building good app sweet with perfect SEO",
    date: "2024-08-20",
    slug: "getting-started-nextjs3",
  },
  {
    title: "ideal-flare-04",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is the react framework for production, which makes building good app sweet with perfect SEO",
    date: "2024-08-20",
    slug: "getting-started-nextjs4",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_POST} />
    </>
  );
};

export default HomePage;
