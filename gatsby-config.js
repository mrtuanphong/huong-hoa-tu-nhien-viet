/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    name: `Huong Hoa Tu Nhien Viet`,
    author: `Phong Do`,
    title: `Welcome to Huong Hoa Tu Nhien Viet's website`,
    description: `Chuyên cung cấp các sản phẩm đồ uống tự nhiên.`,
    keywords: `trà hoa, hương hoa, tự nhiên, làm đẹp, giảm cân`,
    url: "https://huonghoatunhienviet.com", // No trailing slash allowed!
    image: "/images/sharing.jpg", // Path to your image you placed in the 'static' folder
  },
  pathPrefix: `/blog`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
  ],
}