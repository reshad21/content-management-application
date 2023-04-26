import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import articleReducer from './reducers/articleReducer';
const store = createStore(articleReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;