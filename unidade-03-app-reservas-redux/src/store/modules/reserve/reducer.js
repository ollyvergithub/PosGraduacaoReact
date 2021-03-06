import {produce} from 'immer'

export const reserve = (state = [], action) => {
    console.log("Reducer reserve state ", state)
    switch (action.type) {
        case 'ADD_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);
                if (tripIndex >= 0) {
                    draft[tripIndex].amount += 1;
                } else {
                    draft.push(
                        {
                            ...action.trip,
                            amount: 1
                        }
                    )
                }
            })

        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex(trip => trip.id === action.id);
                if (tripIndex >=0){
                    draft.splice(tripIndex, 1)
                }
            })

        case 'UPDATE_RESERVE': {

            if (action.amount <=0){
                return state
            }else {
                return produce(state, draft =>{
                    const tripIndex = draft.findIndex(trip => trip.id === action.id);
                    if (tripIndex >= 0){
                        draft[tripIndex].amount = Number(action.amount)
                    }
                })
            }
        }

        default:
            return state
    }
}