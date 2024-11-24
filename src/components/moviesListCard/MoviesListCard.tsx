import React, {FC} from 'react';
import './MoviesListCard.css';
import Link from "next/link";
import {roboto} from "@/fonts/roboto";

type Props = {
    imageUrl: string,
    title: string,
    releaseDate: string,
    id: number
}
const MoviesListCard: FC<Props> = ({imageUrl, title, releaseDate, id}) => {
    return (
        <Link href={'/movie-' + id.toString()} className='movies-list-card-link' >
            <div className='movies-list-card'>
                <img src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} alt='posterMovie'/>
                <h3 className={roboto.className}>{title} - {new Date(releaseDate).getFullYear()}</h3>
            </div>
        </Link>
    );
};

export default MoviesListCard;