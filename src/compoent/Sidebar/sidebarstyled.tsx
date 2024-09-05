import styled from "styled-components";
import { ChevronLeft } from "lucide-react";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export const Container = styled.div<{ isOpen: boolean | undefined }>`
  background-color: #f6f8fa;
  height: 100vh;
  position: fixed;
  z-index: 99;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 300px;
  right: 0;
  top: 0;
  caret-color: rgba(0, 0, 0, 0);
`;

export const Store = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  margin-bottom: 3%;
  gap: 12px;
`;

export const FormElements = styled.div`
  display: flex;
`;
export const HeaderStyle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
`;
export const Chevron = styled(ChevronLeft)`
  color: #565e6c;
  position: absolute;
  left: 2%;
`;
export const HR = styled.hr`
  border-color: #c3c6cd;
  margin: 0;
`;
export const StoreInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 2px solid transparent;
  justify-content: center;
  margin: 1px;

  &:focus {
    outline: none !important;
    border-color: #719ece;
  }
`;

export const LeftAlign = styled(AlignLeft)`
  margin-top: 4px;
  margin-left: 30px;
`;

export const RighAlign = styled(AlignCenter)`
  margin-top: 4px;
`;

export const CenterAlign = styled(AlignRight)`
  margin-top: 4px;
`;

export const Alignment = styled.div`
  display: flex;
  overflow: hidden;
  border: 1px solid #cdcfd1;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const LeftButton = styled.button`
  display: flex;
  margin: 0;
  height: 40px;
  width: 100px;
  background-color: white;
  border: none;
  padding: 4px;
  border-right: 1px solid #cdcfd1;

  &:hover {
    background-color: #565e6a;
    color: white;
  }
`;

export const RightButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: none;
  padding: 4px;

  &:hover {
    background-color: #565e6a;
    color: white;
  }
`;

export const CenterButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: none;
  padding: 4px;
  border-right: 1px solid #cdcfd1;

  &:hover {
    background-color: #565e6a;
    color: white;
  }
`;

export const Title = styled.label`
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  margin-left: 4px;
`;
export const Headings = styled.label`
  display: flex;
  justify-content: flex-start;
  margin-left: 4px;
`;

export const ColorSection = styled.div`
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding-bottom: 5px;
  gap: 10px;
`;

export const SelectColors = styled.div<{ colorOptions: string }>`
  background-color: ${({ colorOptions }) => colorOptions};
  width: 40px;
  border-radius: 8px;
  padding: 7px;
  height: 30px;
  overflow-y: scroll;
  width: 100px;
  height: 30px;
  cursor: pointer;
  appearance: none;
`;

export const SliderRange = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
`;
export const DropDownStyle = styled.input`
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #999999 #ffffff;
  padding: 5px;
`;
export const Slider = styled.input`
  width: 250px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;
  border-radius: 5px;
  margin-top: 10px;
  width: 200px;
`;

export const DropdownInput = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;
export const DropDownBtn = styled.button<{ BgColors?: string }>`
  position: relative;
  padding: 0.375rem 0.88rem;
  color: #333;
  background-color: ${({ BgColors }) => BgColors};
  border-color: #ddd;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  vertical-align: middle;
  padding: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  width: 50px;
  height: 35px;
  font-size: 0.85rem;
  line-height: 1.5;
  border-radius: 8px;
  cursor: pointer;
`;

export const ColorsOptions = styled.div<{
  optionsColors?: string;
  tabwidth?: string;
}>`
  border: 1px solid transparent;
  ${({ tabwidth }) => tabwidth && `width: ${tabwidth}`};
  height: 35px;
  ${({ optionsColors }) =>
    optionsColors && `background-color: ${optionsColors}`};
  margin: 5px;
  border: 1px soild transparent;
  border-radius: 8px;
  max-height: "200px";
  overflow: "auto";
  width: 46px;
`;

export const SelectName = styled.span`
  margin-left: 15px;
`;

export const Scrollbar = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  left: -25px;
  top: 40px;
  max-height: 200px;
  width: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 20px;
  background-color: #f1f1f1;
  max-width: 50px;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff3a;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #0075ff;
    border-radius: 20px;
  }
`;

export const StyleHeading = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 10%;
  font-weight: bold;
  align-items: left;
  justify-content: left;
`;
