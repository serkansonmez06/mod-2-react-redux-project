import * as actionTypes from './actionTypes'

export function getImage(images) {
    return { type: actionTypes.GET_IMAGE, payload: images }
}
export function displayImages() {
    return function(dispatch) {
        "https://api.unsplash.com/search/photos/?client_id=6b7cd9120e470ca44886aaacd7f00c4cb1beeba4fcecb28d26523d5bfa53c6c1&&query=car"
        let url = "";
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getImage(result)))

    }
}