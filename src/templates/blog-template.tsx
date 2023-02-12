import React from "react"
import { Layout } from "../components/shared"
import { Link, PageProps, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowLeft } from 'react-icons/fa'

const shortcodes = { StaticImage }

const BlogTemplate: React.FC<PageProps> = ({ children, location }) => {

    return (
        <Layout location={location}>
            <div className="w-screen px-8 py-20 flex flex-col gap-10 items-center max-w-2xl mx-auto">
                <div className="w-full flex">
                    <Link to="/blog" className="flex gap-3 items-center text-theme transition-colors duration-100 no-underline" >
                        <FaArrowLeft />
                        <span>
                            Back to overview
                        </span>
                    </Link>
                </div>
                <div className="max-w-full">
                    <MDXProvider components={shortcodes}>
                        {children}
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    )
}

export default BlogTemplate

export const query = graphql`
query QueryWorkItem($frontmatter__id: String) {
  mdx(frontmatter: {id: {eq: $frontmatter__id}}) {
    frontmatter {
      title
      creationTime
      coverImage {
        childImageSharp {
            gatsbyImageData(
                width: 1920
                height: 1080
                )
          }
      }
    }
    excerpt(pruneLength: 250)
    body
  }
}`