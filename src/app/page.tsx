import React, {FC} from 'react';
import {IMoviesBaseResponse} from "@/models/IMoviesBaseResponse";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import MoviesList from "@/components/moviesList/MoviesList";
import {getMovies} from "@/services/api.getMovies";


type MyParams = {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>
}
const MoviesListPage: FC<MyParams> = async ({searchParams}) => {
    const params = await searchParams;
    const page: string | string[] = params.page || '1'
    const moviesResponse: IMoviesBaseResponse = await getMovies(page);
    return (
        <div>
            <MoviesList movies={moviesResponse.results}/>
            <PaginationComponent currentPage={moviesResponse.page} totalPages={moviesResponse.total_pages}/>
        </div>
    );
};

export default MoviesListPage;
