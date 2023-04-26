import { deleteContent } from "../../actions/content";

export const deleteContentData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/articls/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        });
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(deleteContent(id))
        }
    }
}