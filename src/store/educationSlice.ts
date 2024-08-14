import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dayjs } from "dayjs";

export interface IEducation {
  institution: string;
  degree: string;
  date: Dayjs | null;
}

const initialState: IEducation = {
  institution: "",
  degree: "бакалавр",
  date: null,
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setInstitution: (state, action: PayloadAction<string>) => {
      state.institution = action.payload;
    },
    setDegree: (state, action: PayloadAction<string>) => {
      state.degree = action.payload;
    },
    setDate: (state, action: PayloadAction<Dayjs>) => {
      state.date = action.payload;
    },
  },
});

export const { setInstitution, setDegree, setDate } = educationSlice.actions;
export default educationSlice.reducer;