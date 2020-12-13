import React from "react"
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>Contact me</div>
    </Layout>
  )
}
