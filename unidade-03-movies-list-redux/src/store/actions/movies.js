export const ADD_MOVIE = 'ADD_MOVIE'
export const REMOVE_MOVIE = 'REMOVE_MOVIE'

export const addMovie = (payload) => {
    console.log("addMovie Payload ", payload)
    return (
        {
            type: ADD_MOVIE,
            payload,
        }
    )
}

export const removeMovie = (payload) => {
    console.log("addMovie Payload ", payload)
    return (
        {
            type: REMOVE_MOVIE,
            payload,
        }
    )
}

