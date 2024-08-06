import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./personalInfoSlice";
import educationReducer from "./educationSlice";

const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    education: educationReducer,
  },
});

// Экспорт типов RootState и AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Экспорт хранилища по умолчанию
export default store;