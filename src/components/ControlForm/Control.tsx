import React, { FC, PropsWithChildren } from "react";

import * as S from "./style";

interface IControlProps extends PropsWithChildren {
  label: string;
}

const Control: FC<IControlProps> = ({ label, children }) => {
  return (
    <S.Wrapper>
      <label>
        <p>{label}</p>
        {children}
      </label>
    </S.Wrapper>
  );
};

export { Control };