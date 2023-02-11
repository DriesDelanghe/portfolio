import React, { Fragment, PropsWithChildren, useEffect } from "react"
import { NavigationBar } from "./navigation-bar.component"


export const Layout = ({ children, location }: PropsWithChildren<{ location: { pathname: string } }>) => {

    return (
        <div className="w-screen max-w-full">
            <NavigationBar activePath={location.pathname} />
            {children}
        </div >
    )
}