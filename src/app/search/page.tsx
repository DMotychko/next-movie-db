import React, {FC} from 'react';
import MoviesList from "@/components/moviesList/MoviesList";
import {IMoviesBaseResponse} from "@/models/IMoviesBaseResponse";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import {getMoviesByQuery} from "@/services/api.getMoviesByQuery";
import './SearchPage.css'

type MyParams = {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>
}
const SearchPage:FC<MyParams> = async ({searchParams}) => {
    const params = await searchParams;
    const page: string | string[] = params.page || '1';
    const query = params.query || ''
    const moviesResponse: IMoviesBaseResponse = await getMoviesByQuery(query, page)
    return (
        <div>
            {moviesResponse.results.length > 0 ? <MoviesList movies={moviesResponse.results}/> : <p className="error-message">
                We could`nt find anything. Are there any grammatical errors in your query?
            </p>}
            {moviesResponse.total_pages > 1 ? <PaginationComponent currentPage={moviesResponse.page} totalPages={moviesResponse.total_pages}/> : ''}
        </div>
    );
};

export default SearchPage;