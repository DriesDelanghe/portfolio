import { HeadFC, PageProps, graphql } from "gatsby";
import { Link } from 'gatsby-link'
import React, { useMemo, CSSProperties } from "react";
import { Layout } from "../../components/shared";
import { GatsbyImage, IGatsbyImageData, StaticImage, getImage } from "gatsby-plugin-image";
import { FaArrowRight } from 'react-icons/fa'

const WorkPage: React.FC<PageProps> = ({ location, data }) => {

    return (
        <Layout location={location}>
            <div className="w-full max-w-full py-20 flex flex-col gap-16 items-center px-8">
                <MyWorkHero />
                <div className="flex flex-col gap-10 items-center">
                    {/*@ts-ignore*/}
                    {data.allMdx?.nodes?.map((mdx) => <WorkCard id={mdx.id} data={mdx.frontmatter} excerpt={mdx.excerpt} key={mdx.frontmatter.id} />)}
                </div>
            </div>
        </Layout>
    )
}

export default WorkPage

const MyWorkHero = () => {

    return (
        <div className="w-full flex flex-col items-center gap-10">
            <StaticImage alt="Avatar image of Dries Delanghe expressing his love for his work" src="../../images/work-avatar.png"
                className="w-52 aspect-square" />
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-xl">
                    Showcasing My Skills: A Collection of My Best Work
                </h1>
                <p className="text-muted max-w-2xl">
                    Take a look at what I can do. From sleek websites to engaging mobile apps, I've worked on a wide range of projects that showcase my skills as a frontend web developer and designer. My portfolio represents not only my passion for creating beautiful and functional digital solutions, but also my commitment to helping businesses like yours succeed. Browse my work and see for yourself what I can do for you.
                </p>
            </div>
        </div>
    )
}

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
            className="max-w-3xl flex flex-col md:flex-row gap-5 border rounded-lg border-slate-200 group hover:bg-slate-200 transition-colors duration-150 hover:shadow-lg overflow-hidden">
            {image && <GatsbyImage className="group-hover:brightness-50 transition-all duration-150"
                imgClassName="h-full w-full"
                image={image}
                alt={`cover image of ${data.title}`} />}
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
                width: 1920
                height: 1080
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