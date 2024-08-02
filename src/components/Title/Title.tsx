import React, { FC } from "react";

import * as S from "./style";

interface ITitleProps {
  title: string;
}

const Title: FC<ITitleProps> = ({ title }) => {
  return <S.Title>{title}</S.Title>;
};

export { Title };