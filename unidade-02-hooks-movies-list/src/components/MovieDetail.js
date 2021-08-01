import React, {useState, useEffect} from "react";
import {MoviesService} from "../api/MoviesService";

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        const {data} = await MoviesService.getMovieDetail(props.match.params.id)
        console.log("Filme ", data)
        setMovie(data)
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <>
            {Object.entries(movie).length > 0 &&
            <section className='mt-5'>
                <div className='row gx-5'>
                    <div className='col-6'>
                        <figure>
                            <img className='img-fluid'
                                 src={`${MoviesService.getBaseUrlImages(400)}/${movie.poster_path}`} alt=''/>
                        </figure>
                    </div>
                    <div className='col-6'>
                        <h3>{movie.original_title}</h3>
                        <p>{movie.overview}</p>
                        <p className='mt-3'><strong>Gêneros:</strong></p>
                        <ul>
                            {movie.genres.map(genero => (
                                <li key={genero.name}>{genero.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12"></div>

                </div>
            </section>
            }
        </>
    )
}