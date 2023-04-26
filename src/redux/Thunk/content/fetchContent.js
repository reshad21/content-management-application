
import { LoadProduct } from "../../actions/content";

export const fetchContent = () => {
    return async(dispatch, getState) => {
        const res = await fetch('http://localhost:5000/articls');
        const data = await res.json();

        if (data.length) {
            dispatch(LoadProduct(data))
        }
    }
}
