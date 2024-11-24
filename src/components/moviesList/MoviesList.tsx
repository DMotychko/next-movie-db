import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import MoviesListCard from "@/components/moviesListCard/MoviesListCard";
import  './MoviesList.css'

type Props = {
    movies: IMovie[]
}
const MoviesList:FC<Props> = ({movies}) => {
    return (
        <div className='movies-list'>
            <div className='movies-list-wrapper'>
                {
                    movies.map((movie: IMovie, index) =>
                        <MoviesListCard
                            key={index}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            releaseDate={movie.release_date}
                            id={movie.id}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default MoviesList;