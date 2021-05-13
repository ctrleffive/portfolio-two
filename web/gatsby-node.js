const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createWorkPages(graphql, { createPage }) {
  const result = await graphql(`
    {
      allSanityWork {
        nodes {
          publishedAt
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const workItems = (result.data.allSanityWork || {}).nodes || [];

  workItems
    .filter((item) => !isFuture(item.publishedAt))
    .forEach((item) => {
      const slug = item.slug.current;
      const path = `/work/${slug}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/work.js"),
        context: { slug },
      });
    });
}

async function createBlogPages(graphql, { createPage }) {
  const result = await graphql(`
    {
      allDevArticles {
        edges {
          node {
            article {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const blogSlugList = result.data.allDevArticles.edges.map((item) => item.node.article.slug);

  blogSlugList.forEach((slug) => {
    const path = `/blog/${slug}/`;

    createPage({
      path,
      component: require.resolve("./src/templates/blog.js"),
      context: { slug },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createWorkPages(graphql, actions);
  await createBlogPages(graphql, actions);
};
