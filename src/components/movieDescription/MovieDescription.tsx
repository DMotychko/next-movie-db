import React, {FC} from 'react';
import {roboto} from "@/fonts/roboto";
import StarsRating from "@/components/starsRating/StarsRating";
import GenreComponent from "@/components/genre/GenreComponent";
import {IMovieDetails} from "@/models/IMovieDetails";
import './MovieDescription.css';

type Props = {
    movie: IMovieDetails
}
const MovieDescription: FC<Props> = ({movie}) => {
    return (
        <div>
            <div className={'subtext'}>
                <h4 className={roboto.className}>Rating:</h4>
                <div className={'subtext-rating'}>
                    <StarsRating rating={movie.vote_average}/>
                    <p className={roboto.className}>({movie.vote_average})</p>
                </div>
            </div>
            <div className={'subtext'}>
                <h4 className={roboto.className}>Runtime:</h4>
                <p className={roboto.className}>{movie.runtime} min</p>
            </div>
            <div className={'subtext'}>
                <h4 className={roboto.className}>Genres:</h4>
                {movie.genres.map((genre, index) => <GenreComponent key={index} id={genre.id} name={genre.name}
                                                                    className={"genre-for-movieDetails"}/>)}
            </div>
            <div className={'subtext'}>
                <h4 className={roboto.className}>Country of production:</h4>
                <p className={roboto.className}>{movie.production_countries[0].name}</p>
            </div>
            <div className={'subtext'}>
                <h4 className={roboto.className}>Release date:</h4>
                <p className={roboto.className}>{movie.release_date}</p>
            </div>
            <div className={'subtext'}>
                <h4 className={roboto.className}>Overview:</h4>
                <p className={roboto.className}>{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDescription;