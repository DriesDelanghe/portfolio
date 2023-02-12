import { HeadFC, Link, PageProps, graphql } from "gatsby"
import { Layout } from "../../components/shared"
import React from 'react';
import { StaticImage, getSrc } from "gatsby-plugin-image";
import { Card } from "../../components/shared/card.component";


const BlogPage: React.FC<PageProps> = ({ location, data }) => {

    return (
        <Layout location={location}>
            <div className="w-screen max-w-full py-16 px-8 flex flex-col gap-20 items-center">
                <BlogHero />
                {/* @ts-ignore */}
                <BlogPageBody blogposts={data.allMdx.nodes} />
            </div>
        </Layout>
    )
}

const BlogHero = () => {

    return (
        <div className="w-full flex flex-col items-center gap-10 max-w-2xl">
            <StaticImage alt="Avatar image of Dries Delanghe talking about his blog" src="../../images/blog-avatar.png"
                className="w-52 aspect-square" />
            <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-xl">
                    Join Me on My Journey Through Web Development and Design
                </h1>
                <p className="text-muted">
                    Welcome to my personal blog! I'm Dries Delanghe, a web developer and designer with a passion for technology and creativity. Here, you can follow my journey as I explore the ever-evolving world of web development and design.
                    <br /><br />
                    From industry insights to thought-provoking discussions, I'll be sharing my experiences and knowledge with you. Whether you're a fellow developer, designer, or simply interested in technology, you'll find valuable information and insights here.
                    <br /><br />
                    So come along for the ride and join me in exploring the exciting world of web development and design. This is a read-only blog, but feel free to share your thoughts and insights with others in your network.
                </p>
            </div>
        </div>
    )
}

type BlogPageBodyProps = {
    blogposts: { frontmatter: { title: string, id: string, coverImage: { childImageSharp: any } }, excerpt: string }[]
}

const BlogPageBody = ({ blogposts }: BlogPageBodyProps) => {

    console.log(blogposts)

    return (
        <div className="flex gap-5 flex-col max-w-2xl">
            <h2 className="font-semibold text-xl">
                My blogposts
            </h2>
            {blogposts.length > 0 ?
                blogposts.map((post) => <Card key={post.frontmatter.id} excerpt={post.excerpt} gatsbyImageData={post.frontmatter.coverImage?.childImageSharp} title={post.frontmatter.title} to={`/blog/${post.frontmatter.id}`} />)
                :
                <p className="text-muted">
                    Hello there! I'm currently hard at work exploring the latest trends and techniques in web development and design. I can't wait to share my insights and experiences with you on this blog.
                    <br /><br />
                    Unfortunately, I don't have any posts to show you just yet. But don't worry, I'll be sure to share my thoughts and ideas soon.
                    <br /><br />
                    In the meantime, feel free to take a look around my portfolio to see some of my past work and projects. And be sure to come back soon for more updates and insights from me on the world of web development and design. Thank you for your patience!
                </p>
            }
        </div>
    )
}

export default BlogPage

export const Head: HeadFC = ({ data }) => {

    //@ts-ignore
    const src = data?.imageSharp?.gatsbyImageData && getSrc(data.imageSharp.gatsbyImageData)

    const text = `Explore the world of web development and design through the eyes of Dries Delanghe, a passionate front-end developer and designer. Stay updated with the latest trends and techniques, and gain valuable insights through my personal blog. Read thought-provoking articles and join the journey through the ever-evolving world of web development and design.`

    const title = 'The Mind of a Web Developer - Insights and Experiences by Dries Delanghe'

    return (
        <>
            <title>My work - Portfolio - Dries Delanghe</title>
            <meta property='og:type' content='webpage' />
            <meta property='og:site_name' content='Portfolio Dries Delanghe' />
            <meta property='og:image' content={src} />
            <meta property="og:description" content={text} />
            <meta property="og:title" content={title} />
            <meta name="description" content={text} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={text} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:site" content="@Spooksly" />
            <meta name="twitter:image" content={src} />
            <meta name="twitter:creator" content="@Spooksly" />
        </>
    )
}

export const query = graphql`
query MyWork {
  allMdx(filter: {internal: {contentFilePath: {regex: "/.blog/"}}}) {
    nodes {
      frontmatter {
        title
        id
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
    }
  }
    imageSharp(original: {src: {regex: "/blog-avatar/"}}) {
        gatsbyImageData(
            width: 400
            height: 400
        )
}
}
`