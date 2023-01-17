import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  text?: string;
  tipo?: 'primary' | 'secondary';
  onClick?: () => void;
}

const StyledButton = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) =>
    props.tipo === 'primary' ? '#EB9B00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: AbBotaoProps) =>
    props.tipo === 'primary' ? '#FFF' : '#EB9B00'};
  font-size: 20px;
  cursor: pointer;
  ${(props: AbBotaoProps) =>
    props.tipo === 'primary'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;
export const AbBotao = ({ text, onClick, tipo = 'primary' }: AbBotaoProps) => {
  return (
    <StyledButton onClick={onClick} tipo={tipo}>
      {text}
    </StyledButton>
  );
};
