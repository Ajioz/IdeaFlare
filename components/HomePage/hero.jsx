import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/Ajioz.png" alt="Image of Ajioz" width={300} height={300} />
      </div>
      <h1>Hi, I am Ajioz</h1>
      <p>
        Welcome to IdeaFlare—where creativity meets inspiration. Here, we ignite
        sparks of innovation, exploring ideas that challenge the norm and fuel
        your imagination. Whether you're seeking fresh perspectives,
        thought-provoking insights, or a burst of creative energy, IdeaFlare is
        your go-to destination for content that illuminates, inspires, and
        excites. Dive in and let your ideas soar!
      </p>
    </section>
  );
};

export default Hero;
