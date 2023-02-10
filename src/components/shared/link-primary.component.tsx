import { BaseLink, LinkProps } from "./link-base.component";
import React from 'react';

export const LinkPrimary = ({ isExternal, path, title }: LinkProps) => {

    return (
        <BaseLink isExternal={isExternal} path={path} title={title} className="bg-theme text-white border border-theme hover:border-theme-dark hover:bg-theme-dark focus:border-theme-dark focus:bg-theme-dark" />
    )
}