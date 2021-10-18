import {userActionTypes} from "./userActionTypes";
import {rootActionTypes} from "../rootActionTypes";
import {errorActionTypes} from "../errors/errorActionTypes";
import {auth, provider} from "../../config/fbConfig";

export const login = () => {
    return async dispatch => {
        dispatch({type: rootActionTypes.loading})
        try {
            const {user} = await auth.signInWithPopup(provider)
            dispatch({
                type: userActionTypes.init,
                payload: {
                    currentUser: user
                }
            })
        } catch (error) {
            dispatch({
                type: errorActionTypes.login,
                payload: {
                    error: error.message
                }
            })
        }
    }
}

export const logout = () => {
    return dispatch => {
        auth.signOut().then(response => response)
        dispatch({
            type: userActionTypes.logout,
            payload: {
                currentUser: null
            }
        })
    }
}
