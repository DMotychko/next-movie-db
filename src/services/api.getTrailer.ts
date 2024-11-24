import {IVideosBaseResponse} from "@/models/IVideosBaseResponse";
import {initWithToken} from "@/services/api.token";

export const getTrailer = async (id: string): Promise<string | undefined> => {

    const videos: IVideosBaseResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, initWithToken)
        .then(response => response.json())

    let trailer;

    if(videos.results) {
        trailer = videos.results.find(trailer =>
            trailer.type === "Trailer" &&
            trailer.site === "YouTube" &&
            trailer.official
        );
    }
    return `https://www.youtube.com/embed/${trailer?.key}`
}