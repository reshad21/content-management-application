import { AddContentData } from "../../actions/content";

export const addContent = (article) => {
    // this is thunk function
    return async(dispatch, getState) => {
        // this is for server site code
        const res = await fetch('https://cms-server-eight.vercel.app/articls', {
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