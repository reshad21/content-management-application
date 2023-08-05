
import { LoadProduct } from "../../actions/content";

export const fetchContent = () => {
    return async(dispatch, getState) => {
        const res = await fetch('https://cms-server-eight.vercel.app/articls');
        const data = await res.json();

        if (data.length) {
            dispatch(LoadProduct(data))
        }
    }
}
