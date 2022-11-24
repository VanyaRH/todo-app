import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {saveToLocalStorage} from "../storage";
import toolkitSlice from "../reduxToolkit/toolkitSlice";

const rootReducer = combineReducers({
    todos: toolkitSlice
})

export const store = configureStore({
    reducer: rootReducer
})

store.subscribe(() => {
    saveToLocalStorage(store.getState());
})