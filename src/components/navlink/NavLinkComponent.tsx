'use client'
import React, {FC} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import './NavLinkComponent.css'

type Props = {
    path: string,
    children: React.ReactNode
}
const NavLinkComponent: FC<Props> = ({path, children}) => {
    const currentPathname = usePathname()

    return (
        <Link href={path} className={currentPathname === path ? 'active-link-menu link-menu' : 'link-menu'}>{children}</Link>
    );
};

export default NavLinkComponent;