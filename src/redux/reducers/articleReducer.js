import { ADD_CONTENT, DELETE_CONTENT, LOAD_CONTENT, UPDATE_CONTENT, VIEW_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    test: "test",
    content: [],
    singleContent: "",
    loading: true
};
const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTENT:
            return {
                ...state,
                content: action.payload,
                loading: false
            }
        case ADD_CONTENT:
            return {
                ...state,
                content: [...state.content, action.payload],
            }
        case VIEW_CONTENT:
            return {
                ...state,
                singleContent: state.content.find(article => article._id === action.payload),
                loading: false
            }
        case DELETE_CONTENT:
            return {
                ...state,
                content: state.content.filter(article => article._id !== action.payload),
            }
        case UPDATE_CONTENT:
            return {
                ...state,
                content: action.payload,
            }
        default:
            return state;
    }
}

export default articleReducer;