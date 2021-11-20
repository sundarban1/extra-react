import initialState from '../reducers/initialState'
import ih from 'immutability-helper'

const structureUIReducer = (state = initialState.structure, action) => {
    switch (action.type) {
        case 'ToggleLeftDawerMenu': {
            let nstate = ih(state, {leftDawerOpen: {$set:action.payload}})
            return nstate
        }
        default: {
            return initialState.structure
        }

    }
}

export default structureUIReducer