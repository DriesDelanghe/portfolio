import { MouseEventHandler, useMemo } from "react";
import React from 'react';

export interface ButtonProps {
    title: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

interface BaseButtonProps extends ButtonProps {
    className?: string;
}

export const ButtonBase = ({ title, onClick, className }: BaseButtonProps) => {

    const internalClassName = useMemo(() => `rounded-full py-2.5 px-5 transition-colors duration-150 outline-none flex items-center justify-center${className ? ' ' + className : ''}`, [])

    return (
        <button className={internalClassName}>
            {title}
        </button>
    )
}

