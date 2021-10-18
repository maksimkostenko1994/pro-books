import {userActionTypes} from "./userActionTypes";

const userInitState = {
    users: [],
    currentUser: null
}

export default function userReducer(state = userInitState, {type, payload}) {
    switch (type) {
        case userActionTypes.login:
            return {
                ...state,
                currentUser: payload.currentUser
            }

        case userActionTypes.init:
            return {
                ...state,
                users: [...payload.users],
                currentUser: payload.currentUser
            }

        case userActionTypes.logout:
            return {
                ...state,
                currentUser: null
            }

        case userActionTypes.registration:
            return {
                ...state,
                users: [...state.users, payload],
                currentUser: payload.currentUser
            }

        case userActionTypes.update:
            return {
                ...state,
                users: payload.users,
                currentUser: payload.currentUser
            }

        default: return state
    }
}