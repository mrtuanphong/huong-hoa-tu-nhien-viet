import React from "react";
import { graphql, StaticQuery } from "gatsby";
import "./menu.css";

export default function Menu() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              name
            }
          }
        }
      `}
      render={data => (
        <header>
          <h3 className="nav-brand">
            <a href={`${process.env.GATSBY_SITE_URL}/`}>
              {data.site.siteMetadata.name}
            </a>
          </h3>
          <ul>
            <li className="nav-item"><a href={`${process.env.GATSBY_SITE_URL}/`}>Trang chủ</a></li>
            <li className="nav-item"><a href={`${process.env.GATSBY_SITE_URL}/contact/`}>Liên hệ</a></li>
            <li className="nav-item"><a href={`${process.env.GATSBY_SITE_URL}/about/`}>Giới thiệu</a></li>
          </ul>
        </header>
      )}
    />
  )
}