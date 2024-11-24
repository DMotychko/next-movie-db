import {IMoviesBaseResponse} from "@/models/IMoviesBaseResponse";
import {initWithToken} from "@/services/api.token";

export const getMoviesByQuery = async (query: string | string[], page: string | string[]): Promise<IMoviesBaseResponse> => {
    let url: string = `https://api.themoviedb.org/3/discover/movie?page=${page}`
    if (query) {
        url = `https://api.themoviedb.org/3/search/movie?page=${page}&query=${query}`
    }

    return await fetch(url, initWithToken)
        .then(response => response.json())
}