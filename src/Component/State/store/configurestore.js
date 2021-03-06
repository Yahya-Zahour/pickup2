import {createStore, combineReducers} from "redux";
import {groupReducer} from "../Reducers/groupReducer";
export const configreStore=()=>{
    const store = createStore(
        combineReducers({
        groupReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};