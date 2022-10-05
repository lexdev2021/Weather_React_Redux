import {createStore} from 'redux'
import {rootReducers} from './reducers.js'

export const store = createStore(rootReducers);

