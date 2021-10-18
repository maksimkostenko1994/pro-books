import {createStore, applyMiddleware} from "redux";

import root from "./rootReducer";

import thunk from 'redux-thunk'

const store = createStore(root, applyMiddleware(thunk))

export default store
