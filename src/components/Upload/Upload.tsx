import React, { FC, useState } from "react";

import { Upload as UploadAnt, UploadProps } from "antd";
import { RcFile } from "antd/es/upload";

import * as S from "./style";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface IUploadProps {
  onChange: (img: string) => void;
}

const Upload: FC<IUploadProps> = ({ onChange }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = async (fileList) => {
    const base64 = await getBase64(fileList.file as RcFile);
    setImageUrl(base64);
    onChange(base64);
  };

  return (
    <UploadAnt
      listType="picture-card"
      beforeUpload={() => false}
      onChange={handleChange}
      showUploadList={false}
    >
      {imageUrl ? (
        <S.Preview
          src={imageUrl}
          alt="avatar"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <div>Выберите ваш аватар</div>
      )}
    </UploadAnt>
  );
};

export { Upload };