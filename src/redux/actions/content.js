import { LOAD_CONTENT } from "../actionTypes/actionTypes"

export const LoadProduct = (data) => {
    return {
        type: LOAD_CONTENT,
        payload: data,
    }
}