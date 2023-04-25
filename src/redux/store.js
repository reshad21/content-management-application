import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import cartCounter from './middlewares/cartCounter';
import articleReducer from './reducers/articleReducer';
const store = createStore(articleReducer,composeWithDevTools(applyMiddleware(cartCounter)));
export default store;