import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, DatePicker, Input, Select } from "antd";
import { Dayjs } from "dayjs";
import { AppDispatch, RootState } from "../../store/store";
import {
  addEducation,
  IEducation,
  removeEducation,
  updateEducation,
} from "../../store/educationSlice";

const { Option } = Select;

const Education: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const educationList = useSelector((state: RootState) => state.education);

  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("бакалавр");
  const [dateEnd, setDateEnd] = useState<Dayjs | null>(null);

  // Вспомогательная функция для обновления поля и отправки действия
  const updateEducationField = (index: number, field: Partial<IEducation>) => {
    const updatedEducation = { ...educationList[index], ...field };
    dispatch(updateEducation({ index, education: updatedEducation }));
  };

  const handleAddEducation = () => {
    dispatch(addEducation({ institution, degree, dateEnd }));
    setInstitution("");
    setDegree("бакалавр");
    setDateEnd(null);
  };

  const handleRemoveEducation = (index: number) => {
    dispatch(removeEducation(index));
  };

  return (
    <div>
      {educationList.map((education, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <Input
            placeholder="Учреждение"
            value={education.institution}
            onChange={(e) =>
              updateEducationField(index, { institution: e.target.value })
            }
          />
          <DatePicker
            placeholder="Дата окончания"
            value={education.dateEnd}
            onChange={(date) => updateEducationField(index, { dateEnd: date })}
          />
          <Select
            value={education.degree}
            onChange={(value) => updateEducationField(index, { degree: value })}
          >
            <Option value="бакалавр">Бакалавр</Option>
            <Option value="магистратура">Магистратура</Option>
          </Select>
          <Button onClick={() => handleRemoveEducation(index)}>Удалить</Button>
        </div>
      ))}
      <div>
        <Input
          placeholder="Учреждение"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />
        <DatePicker
          placeholder="Дата окончания"
          value={dateEnd}
          onChange={(date) => setDateEnd(date)}
        />
        <Select value={degree} onChange={(value) => setDegree(value)}>
          <Option value="бакалавр">Бакалавр</Option>
          <Option value="магистратура">Магистратура</Option>
        </Select>
        <Button onClick={handleAddEducation}>Добавить образование</Button>
      </div>
    </div>
  );
};

export { Education };