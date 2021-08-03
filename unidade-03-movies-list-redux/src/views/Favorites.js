import {useSelector} from "react-redux";

export const Favorites = () => {

    const favorites = useSelector(state => state.favorites)

    return (
        <section>
            <h3>Meus filmes favoritos</h3>
            <ul>
                {favorites.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
            </ul>
        </section>
    )
}