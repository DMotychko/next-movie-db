import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from '../../img/logo.png'
import userLogo from '../../img/user-logo.png'

const HeaderComponent = () => {
    return (
        <header>
            <Image src={logo} alt='logo' width={150} height={50}/>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/movies'>Movies</Link></li>
                    <li><Link href='/genres'>Genres</Link></li>
                    <li><Link href='/search'>Search</Link></li>
                </ul>
            </nav>
            <Image src={userLogo} alt='logo' width={50} height={50}/>
            <h4>denya</h4>
        </header>
    );
};

export default HeaderComponent;