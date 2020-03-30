import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Menu from "./menu";

export default function Layout({ children, data }) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              name
            }
          }
        }
      `}
      render={data => (
        <div className="app">
          {/* page header: */}
          <Menu />
          
          {/* Page content: */}
          {children}
        </div>
      )}
    />
  
  )
}