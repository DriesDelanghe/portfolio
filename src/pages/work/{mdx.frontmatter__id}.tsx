import { PageProps, graphql } from 'gatsby'
import React, { useEffect, useMemo } from 'react'
import { Layout } from '../../components/shared'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { } from "gatsby-plugin-mdx";

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
        coverImage?: {
            childrenImageSharp: childrenImageSharp[]
        };
        id: string
    }
    body: string;
}

type childrenImageSharp = { gatsbyImageData: IGatsbyImageData }

const WorkPageBody = ({ body, data }: WorkPageBodyProps) => {

    const image: IGatsbyImageData | undefined = useMemo(() => data.coverImage && getImage(data.coverImage?.childrenImageSharp[0]?.gatsbyImageData), [])

    return (
        <div className='py-20 px-8 flex flex-col gap-5 max-w-4xl items-center mx-auto'>
            <h1 className='font-bold text-2xl'>{data.title}</h1>
            <figure>
                {image && <GatsbyImage image={image} alt={`cover image for blog post ${data.title}`} />}
            </figure>
            {body.split('\n').map((text, index) => <p key={index} className='text-muted'>{text}</p>)}
        </div>
    )
}

export const query = graphql`
query QueryWorkItem($frontmatter__id: String) {
  mdx(frontmatter: {id: {eq: $frontmatter__id}}) {
    frontmatter {
      title
      coverImage {
        childrenImageSharp {
            gatsbyImageData(
                width: 1920
                height: 1080
                )
          }
      }
    }
    body
  }
}
`