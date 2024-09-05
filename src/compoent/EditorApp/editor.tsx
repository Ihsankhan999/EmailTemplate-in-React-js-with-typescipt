import { useContext } from "react";
import Sidebar from "../Sidebar/sidebar";
import AddSection from "../Sections/sections";
import { PreviewBtn, AddSecButton, MainContainer } from "./editorStyled";
import { MyContext } from "../Store/Context";

export const Editor = () => {
  const { showSectionModel } = useContext(MyContext);
  return (
    <MainContainer>
      <AddSection />
      <PreviewBtn>Preview</PreviewBtn>
      <AddSecButton onClick={showSectionModel}>Add Section</AddSecButton>
      <Sidebar />
    </MainContainer>
  );
};
