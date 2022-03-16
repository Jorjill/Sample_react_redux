import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import employeeReducer from "./employeeReducer";
import userReducer from "./userReducer";

// all reducers combined
const reducers = combineReducers({
    account: accountReducer,
    employees: employeeReducer,
    user: userReducer
});

export default reducers