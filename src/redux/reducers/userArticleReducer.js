import { READ_LATTER } from "../actionTypes/actionTypes";

const initialState = {
    cart:[],
    test: "reading later article"
}


const userArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case READ_LATTER:
            return {}

        default:
            return state;
    }
}

export default userArticleReducer