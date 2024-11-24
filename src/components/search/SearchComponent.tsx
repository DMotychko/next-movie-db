'use client'
import React, {FormEvent} from 'react';
import './SearchComponent.css'
import {usePathname, useRouter} from "next/navigation";
import {createQueryString} from "@/helpers/createQueryStringFn";


const SearchComponent = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const form: HTMLFormElement = e.currentTarget as HTMLFormElement;
        const input: HTMLInputElement = form.elements.namedItem('search') as HTMLInputElement;
        const value: string = input.value.trim();

        router.replace(pathname + "?" + createQueryString("query", value));

        input.value = ''

    };

    return (
        <form className={pathname === '/search' ? 'search' : 'not-search'} onSubmit={handleSubmit}>
            <input type="text" name='search' className='input-search' placeholder="search"/>
            <button className='button-search'>
                <img src="/img/search.svg" alt="search-logo"/>
            </button>
        </form>
    );
};

export default SearchComponent;