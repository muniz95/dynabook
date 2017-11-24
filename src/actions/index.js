import { PREVIOUS_PAGE, NEXT_PAGE } from '../constants'

export const previousPage = () => {
    const action =  {
        type: PREVIOUS_PAGE
    }
    return action
}

export const nextPage = () => {
    const action =  {
        type: NEXT_PAGE
    }
    return action
}