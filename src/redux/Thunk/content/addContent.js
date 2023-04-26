import { AddContentData } from "../../actions/content";

export const addContent = (article) => {
    // this is for server site code
    return async(dispatch, getState) => {
        const res = await fetch('http://localhost:5000/articls', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();

        // this part of code is for localState
        if (data.acknowledged) {
            dispatch(AddContentData({
                _id: data.insertedId,
                ...article,
            }));
        }
    }
}