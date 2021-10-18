import {errorActionTypes} from "./errorActionTypes";

const errorState = {
    login: {
        email: null,
        password: null
    },
    registration: {
        email: null,
        password: null
    },
    getData: null
}

export default function errorReducer(state = errorState, {type, payload}) {
    switch (type) {
        case errorActionTypes.login:
        case errorActionTypes.login_email:
        case errorActionTypes.login_password:
            return {
                ...state,
                login: {...state.login, ...payload}
            }

        case errorActionTypes.registration:
        case errorActionTypes.registration_email:
        case errorActionTypes.registration_password:
            return {
                ...state,
                registration: {...state.registration, ...payload}
            }

        case errorActionTypes.get_data:
            return {
                ...state,
                getData: {
                    error: payload.error
                }
            }

        default:
            return state
    }
}