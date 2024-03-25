import { combineReducers } from "redux";
import authReducer from "./auth";
import outpassReducer from './outpass'
import currentUserReducer from './currentUser'

export default combineReducers({
    authReducer, outpassReducer, currentUserReducer
})