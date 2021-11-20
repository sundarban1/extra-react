import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import user from './reducers/userReducer'
import structureUI from './reducers/structureUIReducer'
import clients from './reducers/clientesReducer'
import {loadState, saveState} from './persist'
import initialState from './reducers/initialState'
import thunk from 'redux-thunk' 

const persistedState = loadState(initialState)

const store = createStore(
    combineReducers({user, structureUI, clients}),
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunk, reduxImmutableStateInvariant())
      )
)

store.subscribe(() => {
    saveState(store.getState())
})

export default store