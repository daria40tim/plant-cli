import { DIRS_FAIL, DIRS_REQUEST, DIRS_SUCCESS, IMAGE_FAIL, IMAGE_REQUEST, IMAGE_SUCCESS } from "../constants/ocrConstants"

export const ocrReducer = (state = {card: {}}, action) => {
    switch (action.type) {
        case IMAGE_REQUEST:
            return {loading: true, ...state}
        case IMAGE_SUCCESS:
            return {loading: false, card: action.payload}
        case IMAGE_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}

export const dirsReducer = (state = {dirs: []}, action) => {
    switch (action.type) {
        case DIRS_REQUEST:
            return {loading: true, dirs: []}
        case DIRS_SUCCESS:
            return {loading: false, dirs: action.payload}
        case DIRS_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}