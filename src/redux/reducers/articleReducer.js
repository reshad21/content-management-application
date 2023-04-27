import { ADD_CONTENT, DELETE_CONTENT, LOAD_CONTENT, VIEW_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    test: "test",
    content: [],
    loading: true
};
const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTENT:
            console.log("product load",state);
            return {
                ...state,
                content: action.payload,
            }
        case ADD_CONTENT:
            console.log("product add",state);
            return {
                ...state,
                content: [...state.content, action.payload],
            }
        case VIEW_CONTENT:
            console.log("single product load",state);
            return {
                ...state,
                content: state.content.find(article => article._id === action.payload),
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