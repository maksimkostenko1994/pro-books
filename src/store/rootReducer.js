import {combineReducers} from "redux";

import userReducer from "./users/userReducer";
import errorReducer from "./errors/errorReducer";

import {rootActionTypes} from "./rootActionTypes";

const initState = {
    loading: false
}

const rootReducer = (state = initState, {type}) => {
    switch (type) {
        case rootActionTypes.loading:
            return {
                ...state,
                loading: true
            }

        case !rootActionTypes.loading:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

const root =  combineReducers({
    rootReducer,
    userReducer,
    errorReducer
})

export default root