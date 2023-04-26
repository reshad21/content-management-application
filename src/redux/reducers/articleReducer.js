import { ADD_CONTENT, DELETE_CONTENT, LOAD_CONTENT } from "../actionTypes/actionTypes";

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
        case ADD_CONTENT:
            return {
                ...state,
                content: [...state.content, action.payload],
            }
        case DELETE_CONTENT:
            return {
                ...state,
                content: state.content.filter(article => article._id !== action.payload),
            }
        default:
            return state;
    }
}

export default articleReducer;