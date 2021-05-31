import {CARD_CREATE_REQUEST, CARD_CREATE_SUCCESS, CARD_CREATE_FAIL, CARD_GET_ALL_REQUEST, CARD_GET_ALL_SUCCESS, CARD_GET_ALL_FAIL } from "../constants/cardConstants"

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

export const cardListReducer = (state = {cards: []}, action) => {
    switch (action.type) {
        case CARD_GET_ALL_REQUEST:
            return {loading: true, cards: []}
        case CARD_GET_ALL_SUCCESS:
            return {loading: false, cards: action.payload}
        case CARD_GET_ALL_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}