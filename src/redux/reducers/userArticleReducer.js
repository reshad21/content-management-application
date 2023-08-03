import { READ_LATTER } from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    alertMessage: ""
}


const userArticleReducer = (state = initialState, action) => {
    const selectedArticle = state.cart.find(article => article._id === action.payload._id);
    switch (action.type) {
        case READ_LATTER:
            if (!selectedArticle) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
            return {
                ...state,
                alertMessage:"Article already Added your reading list..!"
            }

        default:
            return state;
    }
}

export default userArticleReducer