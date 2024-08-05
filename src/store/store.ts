import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./personalInfoSlice";

const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
  },
});

// Экспорт типов RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Экспорт хранилища по умолчанию
export default store;