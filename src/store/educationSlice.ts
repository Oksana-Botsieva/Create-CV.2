import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dayjs} from "dayjs";

// Определяем интерфейс для данных образования
export interface IEducation {
  institution: string;
  degree: string;
  dateEnd: Dayjs | null;
}

// Начальное состояние - массив с одним элементом для примера
const initialState: IEducation[] = [
  {
    institution: "",
    degree: "бакалавр",
    dateEnd: null,
  },
];

// Создаем слайс
const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    // Добавляем новое образование
    addEducation: (state, action: PayloadAction<IEducation>) => {
      state.push(action.payload);
    },
    // Удаляем образование по индексу
    removeEducation: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    // Обновляем существующее образование по индексу
    updateEducation: (
      state,
      action: PayloadAction<{ index: number; education: IEducation }>,
    ) => {
      const { index, education } = action.payload;
      state[index] = education;
    },
  },
});

// Экспортируем действия и редюсер
export const { addEducation, removeEducation, updateEducation } =
  educationSlice.actions;
export default educationSlice.reducer;
