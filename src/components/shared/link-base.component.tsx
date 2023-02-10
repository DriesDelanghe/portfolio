import { Link } from 'gatsby-link';
import React, { useMemo } from 'react'

export interface LinkProps {
    isExternal?: boolean;
    path: string;
    title: string;
}

interface BaseLinkProps extends LinkProps {
    className?: string;
}

export const BaseLink = ({ isExternal, path, title, className }: BaseLinkProps) => {

    const internalClassName = useMemo(() => `rounded-full py-2.5 px-5 transition-colors duration-150 outline-none flex items-center justify-center${className ? ' ' + className : ''}`, [])

    if (isExternal) {
        return <BaseExternalLink title={title} path={path} className={internalClassName} />
    }
    return <BaseInternalLink title={title} path={path} className={internalClassName} />
}

type InternalBaseLinkProps = {
    title: string;
    path: string;
    className?: string
}

const BaseExternalLink = ({ title, path, className }: InternalBaseLinkProps) => {

    return (
        <a href={path} className={className} >
            {title}
        </a>
    )
}

const BaseInternalLink = ({ title, path, className }: InternalBaseLinkProps) => {

    return (
        <Link to={path} className={className}>
            {title}
        </Link>
    )
}