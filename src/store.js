import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {dirsReducer, ocrReducer} from './reducers/ocrReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cardCreateReducer } from './reducers/cardReducer'


const reducer = combineReducers({
  ocrDetails: ocrReducer,
  dirsList: dirsReducer,
  createCard: cardCreateReducer,
})

const initialState = {
    
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store