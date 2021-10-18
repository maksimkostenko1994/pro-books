import {bookActionTypes} from "./bookActionTypes";
import {rootActionTypes} from "../rootActionTypes";
import {errorActionTypes} from "../errors/errorActionTypes";
import {firestore} from "../../config/fbConfig";

export const addBook = (book) => {
    return async dispatch => {
        dispatch({type: rootActionTypes.loading})
        try {
            await firestore.collection(`books`).add(book)
            dispatch({
                type: bookActionTypes.add,
                payload: book
            })
        } catch (error) {
            dispatch({
                type: errorActionTypes.add_book,
                payload: {
                    error: error.message
                }
            })
        }
    }
}

export const addCommentToBook = comment => {
    return async dispatch => {
        dispatch({type: rootActionTypes.loading})
        try {
            await firestore.collection('comments').add(comment)
            dispatch({
                type: bookActionTypes.add,
                payload: comment
            })
        } catch (error) {
            dispatch({
                type: errorActionTypes.add_book,
                payload: {
                    error: error.message
                }
            })
        }
    }
}

export const removeBook = path => {
    return async dispatch => {
        try {
            dispatch({type: bookActionTypes.remove, payload: []})
        } catch (error) {
            dispatch({
                type: errorActionTypes.del_book,
                payload: {
                    error: error.message
                }
            })
        }
    }
}