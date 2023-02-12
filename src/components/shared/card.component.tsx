import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React from "react";
import { useMemo } from "react";
import { FaArrowRight } from 'react-icons/fa';

type WorkCardProps = {
    gatsbyImageData?: IGatsbyImageData;
    title: string;
    excerpt: string;
    to: string;
}

export const Card = ({ gatsbyImageData, excerpt, title, to }: WorkCardProps) => {

    const image: IGatsbyImageData | undefined = useMemo(() => gatsbyImageData && getImage(gatsbyImageData), [])

    return (
        <Link to={to}
            className="max-w-3xl flex flex-col md:flex-row gap-5 border rounded-lg border-slate-200 group hover:bg-slate-200 transition-colors duration-150 hover:shadow-lg overflow-hidden no-underline">
            {image && <GatsbyImage className="group-hover:brightness-50 transition-all duration-150"
                imgClassName="h-full w-full"
                image={image}
                alt={`cover image of ${title}`} />}
            <div className="p-5 flex flex-col gap-5">
                <h3 className="font-bold ">{title}</h3>
                <p className="text-muted w-full">{excerpt}
                    <span className="w-full inline-flex items-center justify-end gap-2 pl-3 text-theme">See more <FaArrowRight /></span>
                </p>
            </div>
        </Link>
    )
}