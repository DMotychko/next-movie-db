'use client'
import React, {FC} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import {roboto} from "@/fonts/roboto";
import './GenreComponent.css'
import {createQueryString} from "@/helpers/createQueryStringFn";

type Props = {
    id: number,
    name: string,
    className: string
}
const GenreComponent: FC<Props> = ({id, name, className}) => {
    const router = useRouter();

    const currentGenreId = parseInt(useSearchParams().toString().split('=')[1])

    const changeGenreHandler = () => {
        router.replace('/genres' + "?" + createQueryString("with_genres", id.toString()))
    }

    return (
        <button
            onClick={changeGenreHandler}
            className={currentGenreId === id ? `${roboto.className} active-genre ${className}` : `${roboto.className} ${className}`}
        >
            {name}
        </button>
    );
};

export default GenreComponent;