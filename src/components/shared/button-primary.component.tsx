import { ButtonBase, ButtonProps } from "./button-base.component";
import React from 'react'


export const ButtonPrimary = ({ title, onClick }: ButtonProps) => {
    return (
        <ButtonBase title={title} onClick={onClick} className="bg-theme text-white border border-theme hover:border-theme-dark hover:bg-theme-dark focus:border-theme-dark focus:bg-theme-dark" />
    )
}