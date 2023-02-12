import { Link } from "gatsby"
import React, { useCallback, useMemo } from "react"


const routes: { [id: string]: string } = {
    Home: '/',
    Blog: '/blog',
    Work: '/work'
}

type NavigationBarProps = {
    activePath: string;
}

export const NavigationBar = ({ activePath }: NavigationBarProps) => {

    const routeKeys = useMemo(() => Object.keys(routes), [])

    const isActive = useCallback((path: string): boolean => {
        if (path === '/') {
            return path === activePath
        }
        return activePath.includes(path)
    }, [])

    return (
        <nav className="px-12 pt-5 fixed w-full top-0 bg-white z-20">
            <ul className="flex justify-end list-none gap-10">
                {routeKeys.map((name) => <NavigationItem path={routes[name]} title={name} key={routes[name]} isActive={isActive} />)}
            </ul>
        </nav>
    )
}

type NavigationItemProps = {
    title: string;
    path: string;
    isActive: (path: string) => boolean
}

const NavigationItem = ({ title, path, isActive }: NavigationItemProps) => {

    const active = useMemo(() => isActive(path), [])

    return (
        <li className={`hover:border-theme-dark border-0 border-b-2 border-transparent group outline-none list-none py-0 m-0
            focus:border-theme-dark transition-colors duration-100`}>
            <Link to={path} className={`font-medium group-focus:text-theme-dark group-hover:text-theme-dark transition-colors no-underline duration-100 ${active ? 'text-theme' : 'text-black'}`}>
                {title}
            </Link>
        </li>
    )
}