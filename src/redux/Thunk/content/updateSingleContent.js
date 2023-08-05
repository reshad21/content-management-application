import { updatedContentData } from "../../actions/content";

export const updateSingleContent = (updatedContent, id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://cms-server-eight.vercel.app/articls/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedContent),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(updatedContentData(updatedContent));
        }
    }
}