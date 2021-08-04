import {combineReducers} from "redux";
import {reserve} from "./reserve/reducer";

export const rootReducer = combineReducers({
    reserve,
})
