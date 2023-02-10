import React, { Fragment, PropsWithChildren, useEffect } from "react"
import { NavigationBar } from "./navigation-bar.component"


export const Layout = ({ children, location }: PropsWithChildren<{ location: { pathname: string } }>) => {

    useEffect(() => {
        console.log(location)
    })

    return (
        <Fragment>
            <NavigationBar activePath={location.pathname} />
            {children}
        </Fragment>
    )
}