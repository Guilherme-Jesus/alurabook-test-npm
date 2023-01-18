import React from 'react';
import styled from 'styled-components';

interface IAbGroupOptionsProps {
  selection: boolean;
}

const SectionStyled = styled.section<IAbGroupOptionsProps>`
  width: 194px;
  height: 88px;
  background: ${props =>
    props.selection
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#ffffff'};
  border: 1px solid #eb9b00;
  border-color: ${props => (props.selection ? '#002F52' : '#EB9B00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${props => (props.selection ? '#ffff' : '#EB9B00')};
    font-size: 12px;
    font-weight: 400;
  }
  strong {
    color: ${props => (props.selection ? '#ffff' : '#EB9B00')};
    font-size: 16px;
    font-weight: 700;
  }
  footer {
    color: ${props => (props.selection ? '#ffff' : 'rgba(0, 0, 0, 0.54)')};
    font-weight: 400;
    font-size: 12px;
  }
`;

export const AbGroupOptions = () => {
  return (
    <>
      <SectionStyled selection={false}>
        <header>E-book</header>
        <div>
          <strong>R$ 00,00</strong>
        </div>
        <footer>.pdf .epub .mobi</footer>
      </SectionStyled>
      <SectionStyled selection={true}>
        <header>E-book</header>
        <div>
          <strong>R$ 00,00</strong>
        </div>
        <footer>.pdf .epub .mobi</footer>
      </SectionStyled>
      <SectionStyled selection={false}>
        <header>E-book</header>
        <div>
          <strong>R$ 00,00</strong>
        </div>
        <footer>.pdf .epub .mobi</footer>
      </SectionStyled>
    </>
  );
};
