import {IMoviesBaseResponse} from "@/models/IMoviesBaseResponse";
import {initWithToken} from "@/services/api.token";

export const getMovies = async (page: string | string[], genre: string | string[] = '' ):Promise<IMoviesBaseResponse> => {
    let baseUrl: string = `https://api.themoviedb.org/3/discover/movie?page=${page}`;
    if (genre) {
        baseUrl += `&with_genres=${genre}&`
    }
    return await fetch(baseUrl, initWithToken)
        .then(response => response.json())
}