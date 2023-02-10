import { HeadFC, PageProps, graphql } from "gatsby";
import { Link } from 'gatsby-link'
import React, { useMemo } from "react";
import { Layout } from "../../components/shared";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from "gatsby-plugin-image";
import { FaArrowRight } from 'react-icons/fa'

const WorkPage: React.FC<PageProps> = ({ location, data }) => {

    return (
        <Layout location={location}>
            <div className="pt-20 flex flex-col gap-10 items-center px-8">
                {/*@ts-ignore*/}
                {data.allMdx?.nodes?.map((mdx) => <WorkCard id={mdx.id} data={mdx.frontmatter} excerpt={mdx.excerpt} key={mdx.frontmatter.id} />)}
            </div>
        </Layout>
    )
}

export default WorkPage

type WorkCardProps = {
    data: {
        title: string;
        coverImage?: {
            childrenImageSharp: childrenImageSharp[]
        };
        id: string
    }
    excerpt: string;
}

type childrenImageSharp = { gatsbyImageData: IGatsbyImageData }

const WorkCard = ({ data, excerpt }: WorkCardProps) => {

    const image: IGatsbyImageData | undefined = useMemo(() => data.coverImage && getImage(data.coverImage?.childrenImageSharp[0]?.gatsbyImageData), [])

    return (
        <Link to={'/work/' + data.id}
            className="max-w-3xl flex flex-col md:flex-row flex-nowrap gap-5 border rounded-lg border-slate-200 group hover:bg-slate-200 transition-colors duration-150 hover:shadow-lg overflow-hidden">
            <figure className="md:shrink-0 md:grow md:max-w-full">
                {image && <GatsbyImage class="object-cover md:h-full object-left-top group-hover:brightness-50 transition-all duration-150"
                    image={image}
                    alt={`cover image of ${data.title}`} />}
            </figure>
            <div className="p-5 flex flex-col gap-5">
                <h3 className="font-bold ">{data.title}</h3>
                <p className="text-muted w-full">{excerpt}
                    <span className="w-full inline-flex items-center justify-end gap-2 pl-3">See more <FaArrowRight /></span>
                </p>
            </div>
        </Link>
    )
}

export const query = graphql`
query MyWork {
  allMdx(filter: {internal: {contentFilePath: {regex: "/.work/"}}}) {
    nodes {
      frontmatter {
        title
        id
        coverImage {
          childrenImageSharp {
            gatsbyImageData(
                width: 384
                height: 216
                )
          }
        }
      }
      excerpt(pruneLength: 250)
    }
  }
}
`

export const Head: HeadFC = () => <title>My work - Portfolio - Dries Delanghe</title>