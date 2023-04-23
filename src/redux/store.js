import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import articleReducer from './reducers/articleReducer';
const store = createStore(articleReducer,composeWithDevTools());
export default store;