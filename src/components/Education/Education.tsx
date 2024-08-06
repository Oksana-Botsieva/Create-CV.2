import React from "react";
import { Card } from "../Card/Card";
import { Control } from "../ControlForm/Control";
import { DatePicker, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setDate, setDegree, setInstitution } from "../../store/educationSlice";
import { Dayjs } from "dayjs";

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector((state: RootState) => state.education);

  const educationOptions = [
    {
      value: "bachelor",
      label: "Бакалавр",
    },
    {
      value: "master",
      label: "Магистратура",
    },
  ];

  const handleChangeInstitution = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const institution = event.target.value;
    dispatch(setInstitution(institution));
  };

  const handleChangeDegree = (value: string) => {
    dispatch(setDegree(value));
  };
  const handleChangeDate = (date: Dayjs | null) => {
    if (date) {
      dispatch(setDate(date));
    }
  };
  return (
    <Card>
      <Control label={"Учреждение"}>
        <Input
          value={education.institution}
          onChange={handleChangeInstitution}
          placeholder={"Учреждение"}
        />
      </Control>
      <Control label={"Дата окончания"}>
        <DatePicker
          value={education.date}
          onChange={handleChangeDate}
          placeholder={"Дата окончания"}
        />
      </Control>
      <Control label={"Степень"}>
        <Select
          value={education.degree}
          placeholder="Выберите степень"
          onChange={handleChangeDegree}
          options={educationOptions}
          style={{ width: "300px" }}
        />
      </Control>
    </Card>
  );
};

export { Education };