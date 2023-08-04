import { ADD_CONTENT, CLEAR_READING_LIST, DELETE_CONTENT, LOAD_CONTENT, READ_LATTER, REMOVE_FROM_LIST, UPDATE_CONTENT, VIEW_CONTENT } from "../actionTypes/actionTypes"

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

export const viewContentData = (id) => {
    // console.log(id);
    return {
        type: VIEW_CONTENT,
        payload: id
    }
}
export const updatedContentData = (id) => {
    // console.log(id);
    return {
        type: UPDATE_CONTENT,
        payload: id
    }
}

export const readArticleLater = (article) => {
    return {
        type: READ_LATTER,
        payload: article
    }
}


export const clearReadingList = () => {
    return {
        type: CLEAR_READING_LIST,
    }
}

export const removeFromReadingList = (article) => {
    return {
        type: REMOVE_FROM_LIST,
        payload: article
    }
}