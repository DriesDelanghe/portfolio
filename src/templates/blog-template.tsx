import React, { useMemo } from "react"
import { Layout } from "../components/shared"
import { HeadFC, Link, PageProps, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, IGatsbyImageData, StaticImage, getImage, getSrc } from "gatsby-plugin-image"
import { FaArrowLeft } from 'react-icons/fa'

const shortcodes = { StaticImage }

const BlogTemplate: React.FC<PageProps> = ({ children, location, data }) => {

    const image: IGatsbyImageData | undefined = useMemo(() => data?.mdx?.frontmatter.coverImage && getImage(data.mdx?.frontmatter.coverImage?.childImageSharp.gatsbyImageData), [])

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
                <section aria-label="blog post hero section">
                    <h1 className="font-semibold text-2xl">
                        {data?.mdx?.frontmatter.title}
                    </h1>
                    <p className="font-muted">{new Date(data.mdx.frontmatter.creationTime).toDateString()}</p>
                    {image && <GatsbyImage image={image} alt={`cover image of ${data?.mdx?.frontmatter.title}`} />}
                </section>
                <div className="max-w-full">
                    <MDXProvider components={shortcodes}>
                        {children}
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    )
}

export const Head: HeadFC = ({ data }) => {

    //@ts-ignore
    const pageData = data.mdx

    const image: string | undefined = useMemo(() => pageData.frontmatter.coverImage?.childImageSharp && getSrc(pageData.frontmatter.coverImage?.childImageSharp.gatsbyImageData), [])
    const metadata = { title: pageData.frontmatter.title, content: pageData.excerpt, image: image, creationTime: pageData.frontmatter.creationTime }

    return (
        <>
            <title>{metadata.title} - Blog - Dries Delanghe</title>
            <meta property='og:type' content='article' />
            <meta property='og:site_name' content='Portfolio Dries Delanghe' />
            {metadata.image && <meta property='og:image' content={metadata.image} />}
            <meta property="article:section" content="Blog" />
            <meta property="og:description" content={metadata.content} />
            <meta property="og:title" content={metadata.title} />
            <meta property="article:published_time" content={metadata.creationTime} />
            <meta name="description" content={metadata.content} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={metadata.content} />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:site" content="@Spooksly" />
            <meta name="twitter:image" content={metadata.image} />
            <meta name="twitter:creator" content="@Spooksly" />
        </>
    )
}

export default BlogTemplate

export const query = graphql`
query($id: String!) {
  mdx(frontmatter: {id: {eq: $id}}) {
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