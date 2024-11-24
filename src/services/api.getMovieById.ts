import {IMovieDetails} from "@/models/IMovieDetails";
import {initWithToken} from "@/services/api.token";

export const getMovieById = async (id: string):Promise<IMovieDetails> => {
    return await fetch('https://api.themoviedb.org/3/movie/' + id, initWithToken)
        .then(response => response.json())
}