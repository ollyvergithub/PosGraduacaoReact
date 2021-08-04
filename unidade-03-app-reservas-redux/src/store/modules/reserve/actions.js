export const addReserve = (trip) =>{
    console.log("handleAdd ", trip)
    return {
        type: 'ADD_RESERVE',
        trip,
    }
}

export const removeReserve = (id) => {
    return {
        type: 'REMOVE_RESERVE',
        id,
    }
}

export const updateAmountReserve = (id, amount) => {
    return {
        type: 'UPDATE_RESERVE',
        id,
        amount,
    }
}