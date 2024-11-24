import React from 'react';
import './HeaderComponent.css'
import MenuComponent from "@/components/menu/MenuComponent";
import SearchComponent from "@/components/search/SearchComponent";
import {roboto} from "@/fonts/roboto";

const HeaderComponent = () => {
    return (
        <header className='header-component'>
            <div className='header-component-wrapper'>
                <div>
                    <img src="/img/logo.png" alt="logo-netflix" className='logo-netflix'/>
                    <MenuComponent/>
                </div>
                <div className='user-info'>
                    <SearchComponent/>
                    <img src="/img/user-logo.png" alt="user-logo" className='user-logo'/>
                    <h4 className={`${roboto.className} user-nickname`}>mt_denya</h4>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;