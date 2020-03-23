module.exports = {
  siteMetadata: {
    title: `Blog - Ayush Gupta`,
    name: `Ayush Gupta's Blog`,
    siteUrl: `http://ayushgupta.tech/blog`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `thoughts.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_guptaji_`
      },
      {
        name: `github`,
        url: `https://github.com/gupta-ji6`
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/_.guptaji._/`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/guptaji6/`
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`
      }
    ]
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
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};