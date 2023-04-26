import { ADD_CONTENT, LOAD_CONTENT } from "../actionTypes/actionTypes"

export const LoadProduct = (data) => {
    return {
        type: LOAD_CONTENT,
        payload: data,
    }
}

export const AddContentData = (product) => {
    return {
        type: ADD_CONTENT,
        payload: product
    }
}