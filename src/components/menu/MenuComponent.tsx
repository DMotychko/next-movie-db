import React from 'react';
import './MenuComponent.css'
import NavLinkComponent from "@/components/navlink/NavLinkComponent";
import {roboto} from "@/fonts/roboto";

const MenuComponent = () => {
    return (
        <nav className='nav-menu'>
            <ul>
                <li className={roboto.className}><NavLinkComponent path='/'>MOVIES</NavLinkComponent></li>
                <li className={roboto.className}><NavLinkComponent path='/genres'>GENRES</NavLinkComponent></li>
                <li className={roboto.className}><NavLinkComponent path='/search'>SEARCH</NavLinkComponent></li>
            </ul>
        </nav>
    );
};

export default MenuComponent;