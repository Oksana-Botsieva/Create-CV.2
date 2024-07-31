import React from "react";
import { Card } from "../Card/Card";
import { Control } from "../ControlForm/Control";
import { DatePicker, Input } from "antd";

const Experience = () => {
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  return (
    <Card>
      <Control label={"Компания"}>
        <Input />
      </Control>
      <Control label={"Должность"}>
        <Input />
      </Control>
      <Control label={"Преиод работы"}>
        <RangePicker placeholder={["Начало", "Конец"]} />
      </Control>
      <Control label={"Описание"}>
        <TextArea rows={5} />
      </Control>
    </Card>
  );
};

export { Experience };