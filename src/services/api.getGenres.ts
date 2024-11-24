import {IGenre} from "@/models/IGenre";
import {IGenreBaseResponse} from "@/models/IGenreBaseResponse";
import {initWithToken} from "@/services/api.token";

export const getGenres = async (): Promise<IGenre[]> => {
    const response: IGenreBaseResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list', initWithToken)
        .then(response => response.json())
    return response.genres
}