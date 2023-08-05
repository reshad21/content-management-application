import { viewContentData } from "../../actions/content";

export const fetchSingleContent = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://cms-server-eight.vercel.app/articls/${id}`);
        const data = await res.json();
        console.log(data);
        if (data) {
            dispatch(viewContentData(id));
        }
    }
}