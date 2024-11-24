import React, {FC} from 'react';
import GenresListComponent from "@/components/genresList/GenresListComponent";
import MoviesList from "@/components/moviesList/MoviesList";
import {IMoviesBaseResponse} from "@/models/IMoviesBaseResponse";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import {getMovies} from "@/services/api.getMovies";

type MyParams = {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>
}
const GenresPage: FC<MyParams> = async ({searchParams}) => {
    const params = await searchParams;
    const page: string | string[] = params.page || '1';
    const genre = params.with_genres || ''
    const movies: IMoviesBaseResponse = await getMovies(page, genre);
    return (
        <div>
            <GenresListComponent />
            <MoviesList movies={movies.results}/>
            <PaginationComponent currentPage={movies.page} totalPages={movies.total_pages} />
        </div>
    );
};

export default GenresPage;