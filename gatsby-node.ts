const path = require("path")
const blogTemplate = path.resolve('./src/templates/blog-template.tsx')

//@ts-ignore
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
    query GetBlogPosts {
      allMdx(filter: {internal: {contentFilePath: {regex: "/.blog/"}}}){
        nodes {
          id
          frontmatter {
            title
            id
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

    if (result.errors) {
        reporter.panicOnBuild('Error loading MDX result', result.errors)
    }

    // Create blog post pages.
    const posts = result.data.allMdx.nodes

    // you'll call `createPage` for each result
    //@ts-ignore
    posts.forEach(node => {
        createPage({
            // As mentioned above you could also query something else like frontmatter.title above and use a helper function
            // like slugify to create a slug
            path: 'blog/' + node.frontmatter.id,
            // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
            component: `${blogTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            // You can use the values in this context in
            // our page layout component
            context: { id: node.id },
        })
    })
}