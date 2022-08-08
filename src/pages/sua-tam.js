import React from "react";
import { graphql } from 'gatsby';
// import Layout from "../components/layout";
// import Tabletop from "../components/Tabletop";
import { Helmet } from "react-helmet";
import { Button } from '@ahaui/react';

export default ({ data }) => {
  return (
    <div style={{width: "100%" ,height: "100vh"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta name="author" content={data.site.siteMetadata.author} />
        <link rel="canonical" href={data.site.siteMetadata.url} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:description" content={data.site.siteMetadata.description} />
        <meta property="og:image" content={data.site.siteMetadata.url + data.site.siteMetadata.image} />
      </Helmet>
      <style>{"\
        html, body {\
          overflow: hidden;\
        }\
        .sua-tam-iframe {\
          width: 100%;\
          height: 100%;\
          border: 0;\
        }\
      "}</style>
      <iframe 
        className="sua-tam-iframe" 
        src="https://ldp.page/62f0cf32457e1a0020c1e118"
        frameborder="0"
      ></iframe>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        name,
        author,
        title,
        description,
        keywords,
        url,
        image
      }
    }
  }
`