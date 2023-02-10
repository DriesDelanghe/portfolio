import { ButtonBase, ButtonProps } from "./button-base.component";
import React from 'react';

export const ButtonSecondary = ({ title, onClick }: ButtonProps) => {

    return (
        <ButtonBase title={title} onClick={onClick} className="border border-theme text-theme hover:bg-theme-light hover:text-white focus:text-white focus:bg-theme-light" />
    )
}