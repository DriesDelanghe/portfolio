import { Link } from "gatsby"
import React, { useCallback, useMemo } from "react"


const routes: { [id: string]: string } = {
    Home: '',
    Blog: '/blog',
    Work: '/work'
}

type NavigationBarProps = {
    activePath: string;
}

export const NavigationBar = ({ activePath }: NavigationBarProps) => {

    const routeKeys = useMemo(() => Object.keys(routes), [])

    const isActive = useCallback((path: string): boolean => {
        if (activePath.includes('/')) {
            return activePath.split('/')[0] === path;
        }
        return path === activePath;
    }, [])

    return (
        <nav className="px-12 py-5 fixed w-full top-0">
            <ul className="flex justify-end list-none gap-10">
                {routeKeys.map((name) => <NavigationItem path={routes[name]} title={name} key={routes[name]} isActive={isActive(routes[name])} />)}
            </ul>
        </nav>
    )
}

type NavigationItemProps = {
    title: string;
    path: string;
    isActive: boolean
}

const NavigationItem = ({ title, path, isActive }: NavigationItemProps) => {



    return (
        <li className={`hover:border-theme-dark border-0 border-b-2 border-transparent group outline-none 
            focus:border-theme-dark transition-colors duration-100`}>
            <Link to={path} className={`font-medium group-focus:text-theme-dark group-hover:text-theme-dark transition-colors duration-100${isActive ? ' text-theme' : ''}`}>
                {title}
            </Link>
        </li>
    )
}