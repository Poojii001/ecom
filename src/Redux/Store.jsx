import { configureStore } from "@reduxjs/toolkit";

import CreateSagaMiddleware from "redux-saga/effects"

import RootReducer from "./Reducers/RootReducer";
import RootSaga from "./Sagas/RootSaga";

const Saga = CreateSagaMiddleware()

const store = configureStore({
    reducer: RootReducer,
    middleware: () => [Saga]
})

export default store 

Saga.run(RootSaga)