import axios from "axios";

const API_KEY = 'd416af5d4faee64e25ab001d87aab5c3';
const BASE_URL = 'https://api.themoviedb.org/3/';
const whithBaseUrl = (path) =>`${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService{

    static getMovies() {
        return axios(whithBaseUrl('movie/popular'))
    }

    static getBaseUrlImages(tamanho= 200){
        return `https://image.tmdb.org/t/p/w${tamanho}`
    }

    static getMovieDetail(id){
        return axios(whithBaseUrl(`movie/${id}`))
    }


}