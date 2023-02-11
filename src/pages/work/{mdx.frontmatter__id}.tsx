import { HeadFC, Link, PageProps, graphql } from 'gatsby'
import React, { useEffect, useMemo } from 'react'
import { Layout } from '../../components/shared'
import { GatsbyImage, IGatsbyImageData, getImage, getSrc } from 'gatsby-plugin-image'
import { FaArrowLeft } from 'react-icons/fa'

const WorkPage: React.FC<PageProps> = ({ data, location }) => {


    return (
        <Layout location={location}>
            {/*@ts-ignore */}
            <WorkPageBody body={data.mdx.body} data={data.mdx.frontmatter} />
        </Layout>
    )
}

export default WorkPage

type WorkPageBodyProps = {
    data: {
        title: string;
        creationTime: string;
        coverImage?: {
            childImageSharp: any
        };
        id: string
    }
    body: string;
}

type childrenImageSharp = { gatsbyImageData: IGatsbyImageData }

const WorkPageBody = ({ body, data }: WorkPageBodyProps) => {

    const image: IGatsbyImageData | undefined = useMemo(() => data.coverImage && getImage(data.coverImage?.childImageSharp.gatsbyImageData), [])
    console.log(image)

    return (
        <div className='py-20 px-8 flex flex-col gap-5 max-w-4xl items-center mx-auto'>
            <Link to='/work' className="w-full flex items-center gap-3">
                <FaArrowLeft />
                Back to overview
            </Link>
            <div className='w-full'>
                <h1 className='font-bold text-2xl'>{data.title}</h1>
                <p className="text-muted font-sm">{new Date(data.creationTime).toDateString()}</p>
            </div>
            {image && <GatsbyImage image={image} alt={`cover image for blog post ${data.title}`} />}
            {body.split('\n').map((text, index) => <p key={index} className='text-muted'>{text}</p>)}
        </div>
    )
}

export const Head: HeadFC = ({ data }) => {

    //@ts-ignore
    const pageData = data.mdx

    const image: string | undefined = useMemo(() => pageData.frontmatter.coverImage.childImageSharp && getSrc(pageData.frontmatter.coverImage?.childImageSharp.gatsbyImageData), [])
    const metadata = { title: pageData.frontmatter.title, content: pageData.excerpt, image: image, creationTime: pageData.frontmatter.creationTime }

    return (
        <>
            <title>{metadata.title} - My work - Portfolio - Dries Delanghe</title>
            <meta property='og:type' content='article' />
            <meta property='og:site_name' content='Portfolio Dries Delanghe' />
            {metadata.image && <meta property='og:image' content={metadata.image} />}
            <meta property="article:section" content="Blog" />
            <meta property="og:description" content={metadata.content} />
            <meta property="og:title" content={metadata.title} />
            <meta property="article:published_time" content={metadata.creationTime} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={metadata.content} />
            <meta name="twitter:title" content={metadata.title} />
            <meta name="twitter:site" content="@Spooksly" />
            <meta name="twitter:image" content={metadata.image} />
            <meta name="twitter:creator" content="@Spooksly" />
        </>
    )
}

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
}
`