import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import articleReducer from './reducers/articleReducer';
const store = createStore(articleReducer,composeWithDevTools(applyMiddleware()));
export default store;