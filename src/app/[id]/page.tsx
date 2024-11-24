import React, {FC} from 'react';
import {IMovieDetails} from "@/models/IMovieDetails";
import './MoviePage.css'
import TrailerComponent from "@/components/trailer/TrailerComponent";
import {getMovieById} from "@/services/api.getMovieById";
import {getTrailer} from "@/services/api.getTrailer";
import MovieDescription from "@/components/movieDescription/MovieDescription";

type Props = {
    params: Promise<{id: string}>
}
const MoviePage: FC<Props> = async ({params}) => {

    const myParams = await params
    const id = myParams.id.split('-')[1];
    const movie: IMovieDetails = await getMovieById(id);
    const trailerLink = await getTrailer(id);

    return (
        <div className='movie-page'>
            <div className="movie-page-wrapper">
                <h2>{movie.title}</h2>
                <div className='movie-page-details-info'>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="poster"/>
                        <TrailerComponent trailerLink={trailerLink}/>
                    </div>
                    <MovieDescription movie={movie}/>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;