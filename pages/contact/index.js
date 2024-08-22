import React from "react";
import Head from "next/head";
import ContactForm from "../../components/contact/contact-form";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Hire Me</title>
        <meta
          name="description"
          content="Contact Ajiroghene Sunny is full stack software Engineer with many years of developmental journey.  He has achieved significant reach in the software industry and IoTs. For software development solution, he is available for hire!"
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
