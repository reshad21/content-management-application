import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import userArticleReducer from './userArticleReducer';

const rootReducer = combineReducers({
    article: articleReducer,
    user: userArticleReducer
})
export default rootReducer;