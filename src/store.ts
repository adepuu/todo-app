import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./features/todo/slice";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  todoReducer: todoSlice.reducer,
});

const persistence = persistReducer(
  {
    key: "todo-data",
    storage: createWebStorage("local"),
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistence,
  devTools: true,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
