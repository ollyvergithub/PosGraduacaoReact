import React from "react";
import {MoviesService} from "../api/MoviesService";
import {Link} from "react-router-dom";

export const Movie = ({movie}) => {
    return (
        <div className="movie-item">
            <figure className="text-center">
                <img src={`${MoviesService.getBaseUrlImages()}${movie.poster_path}`} alt=''/>
            </figure>
            <div className='movie-excerpt'>
                <h3>{movie.original_title}</h3>
                <Link
                    to={`/movie/${movie.id}`}
                    className='btn btn-primary'
                >
                    Ver detalhes
                </Link>
            </div>
        </div>
    )
}