import React from 'react';
import {IMovies} from "@/models/IMovies";

const MoviesPage = async () => {
    const movies: IMovies[] = await fetch('https://api.themoviedb.org/3/discover/movie', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmI4MTA3MTY5ZTYwMjc3OWY3MWFmYTdmZjc4ZmIzNCIsIm5iZiI6MTczMTY3MzQ4OC45MjQ5NTk3LCJzdWIiOiI2NzM3MWQwNWJhMjlhMDUxYjNjYzkwZDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.26F53Wt9864H4zbM5ylraB8ygzFQpsdx_HmT31suVCA'
        }
    }).then(response => response.json())
    return (
        <div>
            {JSON.stringify(movies)}
        </div>
    );
};

export default MoviesPage;