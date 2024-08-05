import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dayjs} from "dayjs";

// 1. Опеределение интерфейсов для типов данных
interface IPersonalInfo {
  fio: string;
  address: string;
  phone: string;
  birthday: Dayjs | null;
  avatar: string;
}

const initialState: IPersonalInfo = {
  address: "",
  fio: "",
  birthday: null,
  phone: "",
  avatar: "",
};

// Создание слайса
const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setFio: (state, action: PayloadAction<string>) => {
      state.fio = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setBirthday: (state, action: PayloadAction<Dayjs | null>) => {
      state.birthday = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
  },
});

// Экспорт действий и редюсера
export const { setBirthday, setAddress, setAvatar, setFio, setPhone } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
