import { CLEAR_READING_LIST, READ_LATTER } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    alertMessage: "",
}


const userArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case READ_LATTER:
            const selectedArticle = state.cart.find(article => article._id === action.payload._id);
            if (!selectedArticle) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
            return {
                ...state,
                alertMessage: "Article already Added your reading list..!"
            }

        case CLEAR_READING_LIST:
            return {
                ...state,
                cart: [],
                alertMessage: "Your Reading List is empty..!"
            }

        default:
            return state;
    }
}

export default userArticleReducer