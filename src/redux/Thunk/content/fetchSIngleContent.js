import { viewContentData } from "../../actions/content";

export const fetchSingleContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/articls/${id}`);
        const data = await res.json();
        console.log(data);
        if (data) {
            dispatch(viewContentData(id));
        }
    }
}