import {combineReducers} from 'redux'
import posts from "./posts/reducer.js"

export default combineReducers({// combines all reducers after importing them
    posts
});