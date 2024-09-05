import styled from "styled-components";

export const Descreption = styled.div<{
  BgColor: string | undefined;
  Textcolor: string | undefined;
}>`
  color: ${({ Textcolor }) => Textcolor};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  justify-content: left;
  align-items: start;
  flex-direction: column;
  background-color: #f8f8f8;
  border: 2px solid transparent;
  width: 579px;
  background-color: ${({ BgColor }) => BgColor};
  padding: 30px 0px 20px 20px;
  :hover {
    border-color: black;
  }
`;
export const FooterItem = styled.div`
  margin: 0;
`;
export const FooterLinks = styled.div<{
  LinkColor: string | undefined;
}>`
  color: ${({ LinkColor }) => LinkColor};
`;
