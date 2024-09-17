
import React from "react";
import Layout from "../components/layout/layout";
import Head from "next/head";
import "../styles/globals.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI if an error has occurred
      return <h1>Something went wrong.</h1>;
    }

    // Render children if no error
    return this.props.children;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
