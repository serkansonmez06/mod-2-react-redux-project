import * as actionTypes from '../actions/actionTypes'
import initialState from './initalState'

export default function getImageReducer(state = initialState.images, action) {
    switch (action.type) {
        case actionTypes.GET_IMAGE:
            return action.payload
        default:
            return state;
    }
}