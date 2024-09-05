import { TextAlignment } from "./headerStyled";
import { MyContext } from "../Store/Context";
import { useContext } from "react";

export default function Header() {
  const UnHideModel = useContext(MyContext);
  const { OpenModel, inputValue, alignment, width, selectColor, bgColor } =
    UnHideModel;

  return (
    <TextAlignment
      Textcolor={selectColor ? selectColor.value : undefined}
      IncreaseFontSize={width}
      AlignContent={alignment}
      onClick={OpenModel}
      BgColor={bgColor ? bgColor.value : undefined}
    >
      {inputValue}
    </TextAlignment>
  );
}
