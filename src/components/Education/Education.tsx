import React from "react";
import { Card } from "../Card/Card";
import { Control } from "../ControlForm/Control";
import { DatePicker, Input, Select } from "antd";

const Education = () => {
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
  const handleChange = (value: string) => {
    console.log("Selected degree:", value);
  };
  const handleSearch = (value: string) => {
    console.log("Search:", value);
  };

  return (
    <Card>
      <Control label={"Учреждение"}>
        <Input />
      </Control>
      <Control label={"Дата окончания"}>
        <DatePicker />
      </Control>
      <Control label={"Степень"}>
        <Select
          placeholder="Выберите степень"
          onChange={handleChange}
          options={educationOptions}
          style={{ width: "300px" }}
        />
      </Control>
    </Card>
  );
};

export { Education };