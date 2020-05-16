module.exports = {
  siteMetadata: {
    title: `Blog - Ayush Gupta`,
    name: `Ayush Gupta's Blog`,
    siteUrl: `http://ayushgupta.tech/blog`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `thoughts.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_guptaji_`,
      },
      {
        name: `github`,
        url: `https://github.com/gupta-ji6`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/_.guptaji._/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/guptaji6/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog - Ayush Gupta`,
        short_name: `Ayush Gupta's Blog`,
        start_url: `/`,
        background_color: `#0A192F`,
        theme_color: `#0A192F`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
