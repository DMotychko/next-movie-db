import React from 'react';
import {IGenre} from "@/models/IGenre";
import GenreComponent from "@/components/genre/GenreComponent";
import './GenresListComponent.css'
import {getGenres} from "@/services/api.getGenres";

const GenresListComponent = async () => {
    const genres: IGenre[] = await getGenres()

    return (
        <div className='genres-list'>
            {genres.map(({id, name}) => <GenreComponent key={id} id={id} name={name} className={"genre-btn"}/>)}
        </div>
    );
};

export default GenresListComponent;