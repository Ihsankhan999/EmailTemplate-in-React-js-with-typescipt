import styled from "styled-components";

export const TextAlignment = styled.div<{
  AlignContent: string | undefined;
  IncreaseFontSize: number | undefined;
  Textcolor: string | undefined;
  BgColor: string | undefined;
}>`
  text-align: ${({ AlignContent }) => AlignContent};
  width: 100%;
  background-color: #f8f8f8;
  height: 70px;
  color: ${({ Textcolor }) => Textcolor};
  background-color: ${({ BgColor }) => BgColor};
  align-items: center;
  border: 2px solid transparent;
  font-size: ${({ IncreaseFontSize }) => IncreaseFontSize}px;
  &:hover {
    border-color: black;
    align-items: center;
  }
`;
