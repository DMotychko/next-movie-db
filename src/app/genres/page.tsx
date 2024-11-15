import React from 'react';
import {IGenre} from "@/models/IGenre";

const GenresPage = async () => {
    const {genres}: {genres: IGenre[]} = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmI4MTA3MTY5ZTYwMjc3OWY3MWFmYTdmZjc4ZmIzNCIsIm5iZiI6MTczMTY3MzQ4OC45MjQ5NTk3LCJzdWIiOiI2NzM3MWQwNWJhMjlhMDUxYjNjYzkwZDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.26F53Wt9864H4zbM5ylraB8ygzFQpsdx_HmT31suVCA'
        }
    }).then(response => response.json())
    return (
        <div>
            {genres.map((genre: IGenre, index) => <div key={index}>{genre.name}</div>)}
        </div>
    );
};

export default GenresPage;