import React from "react";
import { graphql } from 'gatsby';
// import Layout from "../components/layout";
// import Tabletop from "../components/Tabletop";
import { Helmet } from "react-helmet";
import { Button } from '@ahaui/react';

export default ({ data }) => {
  return (
    <div className="min-h-screen bg-black text-white">
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
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl mb-5">
          {data.site.siteMetadata.name}
        </h1>
        <div >
          <a 
            href="https://www.lazada.vn/shop/huong-hoa-mart/" 
            title="Hương Hoa Tự Nhiên Việt trên Lazada"
            target="_blank"
            className="inline-grid grid-cols-3 gap-x-4">
            Gian hàng trên Lazada
          </a>

          <a 
            href="https://shopee.vn/thanhhoa2015" 
            title="Hương Hoa Tự Nhiên Việt trên Lazada"
            target="_blank"
            className="inline-grid grid-cols-3 gap-x-4">
            Gian hàng trên Shopee
          </a>
        </div>
      </div>
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