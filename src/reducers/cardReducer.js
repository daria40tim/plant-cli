import {CARD_CREATE_REQUEST, CARD_CREATE_SUCCESS, CARD_CREATE_FAIL } from "../constants/cardConstants"

export const cardCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CARD_CREATE_REQUEST:
            return {loading: true }
        case CARD_CREATE_SUCCESS:
            return {loading: false, success: action.payload}
        case CARD_CREATE_FAIL:
            return {loading: false, success: false, error: action.payload}
        default: 
            return state
    }
}