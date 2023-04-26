import { ADD_CONTENT, DELETE_CONTENT, LOAD_CONTENT } from "../actionTypes/actionTypes"

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

export const deleteContent = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}