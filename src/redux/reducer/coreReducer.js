import {combineReducers} from "redux";
import QuotationManager from "./QuotationManager/QuotationManager"
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    QuotationManager: QuotationManager

})
export default rootReducer