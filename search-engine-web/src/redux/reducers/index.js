import {
    combineReducers
} from 'redux';
import developerNameReducer from './developerNameReducer.js'
//combine reducer together.. we will have more reducers
//call combineReducer from redux

const reducers = combineReducers({
    developerNameReducer,
})


export default reducers;