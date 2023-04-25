import { LOAD_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    test: "test",
    content: [],
};
const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTENT:
            return {
                ...state,
                content: action.payload,
            }
        default:
            return state;
    }
}

export default articleReducer;