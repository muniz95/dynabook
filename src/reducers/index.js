import { START_SLIP, PAUSE_SLIP, STOP_SLIP } from '../constants'
import { combineReducers } from 'redux'

const page = (state = 0, action) => {
    switch (action.type) {
        case START_SLIP:
            return state === 0 ? state : state - 1
        case PAUSE_SLIP:
            return state + 1
        case STOP_SLIP:
            return state + 1
        default:
            return state;
    }
}

export default combineReducers({
    page
})
