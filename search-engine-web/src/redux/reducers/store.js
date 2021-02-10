import {
    createStore
} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import developerNameReducer from './developerNameReducer.js'

const store = createStore(developerNameReducer, composeWithDevTools())

export default store