import { START_SLIP, PAUSE_SLIP, STOP_SLIP } from '../constants'

export const startSlip = () => {
    const action =  {
        type: START_SLIP
    }
    return action
}

export const pauseSlip = () => {
    const action =  {
        type: PAUSE_SLIP
    }
    return action
}

export const stopSlip = () => {
    const action =  {
        type: STOP_SLIP
    }
    return action
}