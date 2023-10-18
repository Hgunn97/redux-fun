import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice"
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    devTools: process.env.NODE_ENV !== "production"
});

console.log("Initial: ", store.getState());
store.subscribe(() => {
    console.log("Updated: ", store.getState());
})

export type AppDispatch = typeof store.dispatch;