import { Dayjs } from "dayjs";

export interface IExperience {
  id: number;
  company: string;
  position: string;
  date: [Dayjs | null, Dayjs | null];
  description: string;
}