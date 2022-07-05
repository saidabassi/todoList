import { INCREMENT } from "./ActionsTypes"
import { DECREMENT } from "./ActionsTypes"


export const Increment = () => {
    return {
        type: INCREMENT
    }
}

export const Decrement = () => {
    return {
        type: DECREMENT
    }
}