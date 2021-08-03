import React from "react";
import {MoviesService} from "../api/MoviesService";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMovie, removeMovie} from "../store/actions/movies";
import {favorites} from "../store/reducers/favorites";

export const Movie = ({movie}) => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
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
                { favorites.movies.find(m=> m.id === movie.id) ? (
                        <button
                            onClick={()=>dispatch(removeMovie(movie))}
                            className='btn btn-danger mt-2'
                        >
                            + Remover dos favoritos
                        </button>
                ):
                    <button
                        onClick={()=>dispatch(addMovie(movie))}
                        className='btn btn-info mt-2'
                    >
                        + Adicionar aos favoritos
                    </button>
                }
            </div>
        </div>
    )
}