import { PREVIOUS_PAGE, NEXT_PAGE } from '../constants'
import { combineReducers } from 'redux'

const page = (state = 0, action) => {
    switch (action.type) {
        case PREVIOUS_PAGE:
            return state === 0 ? state : state - 1
        case NEXT_PAGE:
            return state + 1
        default:
            return state;
    }
}

export default combineReducers({
    page
})
