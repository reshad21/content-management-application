import { LoadProduct, searching } from "../../actions/content";

export const searchContent = (searchQuery) => {
    return async (dispatch, getState) => {
        dispatch(searching(searchQuery));
        const res = await fetch(`https://cms-server-eight.vercel.app/articles/search/${searchQuery}`);
        const data = await res.json();

        if (data.length) {
            dispatch(LoadProduct(data));
        }
    };
};

