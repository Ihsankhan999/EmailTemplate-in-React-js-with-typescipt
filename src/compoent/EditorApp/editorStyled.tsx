import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 800px;
  background-color: #eeeff1;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px soild;
  border-color: #d9ad5c;
  padding: 0px 100px;
`;

export const BehindSidebar = styled.div<{ hide: boolean }>`
  flex-direction: column;
  display: ${({ hide }) => (hide ? "block" : "flex")};
  justify-content: space-between;
  position: relative;
`;
const fixedBtn = css`
  position: fixed;
  border-radius: 50px;
  color: white;
  border: none;
  padding: 16px;
  font-weight: bold;
  right: 50px;
  background-color: #244581;
  caret-color: rgba(0, 0, 0, 0);
`;

export const PreviewBtn = styled.button`
  top: 50px;

  ${fixedBtn}
`;
export const AddSecButton = styled.button`
  bottom: 50px;
  ${fixedBtn}
`;
