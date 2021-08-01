import React, {useEffect, useState} from "react";
import {Movie} from "../components/Movie";
import {MoviesService} from "../api/MoviesService";

export const Home = () => {

    const [movies, setMovies] = useState([])

    const getMovies = async () =>{
        const {data: {results} } = await MoviesService.getMovies()
        console.log("Filmes ", results)
        setMovies(results)
    }

    useEffect(()=>{
        getMovies()
    }, [])

    return (
        <div className='row gy-5'>
            {movies.map((movie) =>(
                <div className="col-3" key={movie.id}>
                    <Movie
                        movie={movie}
                    />
                </div>
            ))}

        </div>
    )
}