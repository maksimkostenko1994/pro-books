import {bookActionTypes} from "./bookActionTypes";

const bookState = {
    books: []
}

export default function bookReducer(state = bookState, {type, payload}) {
    switch (type) {
        case bookActionTypes.add:
            return {
                ...state,
                books: [...state.books, {...payload}]
            }
        case bookActionTypes.remove:
            return {
                ...state,
                books: payload.books
            }

        default:
            return state
    }
}