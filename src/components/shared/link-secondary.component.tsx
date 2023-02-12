import { BaseLink, LinkProps } from "./link-base.component";
import React from 'react'

export const LinkSecondary = ({ path, title, isExternal }: LinkProps) => {
    return (
        <BaseLink isExternal={isExternal} path={path} title={title} className="border border-theme text-theme hover:bg-theme-light hover:text-white focus:text-white focus:bg-theme-light no-underline" />
    )
}