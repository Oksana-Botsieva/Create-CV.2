import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Control } from "../ControlForm/Control";
import { List, Select } from "antd";

const Skills: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skillOptions = [
    { value: "React", label: "React" },
    { value: "Angular", label: "Angular" },
    { value: "View", label: "View" },
    { value: "Typescript", label: "Typescript" },
    { value: "Sass/Scss", label: "Sass/Scss" },
    { value: "Styled components", label: "Styled components" },
    { value: "Material UI", label: "Material UI" },
    { value: "Rest API", label: "Rest API" },
    { value: "Webpack", label: "Webpack" },
    { value: "Vite", label: "Vite" },
  ];

  const handleChange = (value: string[]) => {
    setSelectedSkills(value);
    console.log(value);
  };
  return (
    <Card>
      <Control label={"Навыки"}>
        <Select
          mode="multiple"
          allowClear
          style={{ minWidth: "300px" }}
          placeholder="Выберите навыки"
          onChange={handleChange}
          options={skillOptions}
        />
      </Control>
      <List
        dataSource={selectedSkills}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Card>
  );
};

export { Skills };