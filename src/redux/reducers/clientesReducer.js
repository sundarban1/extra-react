import initialState from '../reducers/initialState'
import ih from 'immutability-helper'

const userReducer = (state = initialState.clients, action) => {
    switch (action.type) {
        case 'SelectClient': {
            let nstate = ih(state, { selected: { $set: action.payload } })
            return nstate
        }
        case 'AddClient': {
            let nstate = ih(state, { clients: { $push: [action.payload] } })
            return nstate
        }
        default: {
            return initialState.clients
        }

    }
}

export default userReducer