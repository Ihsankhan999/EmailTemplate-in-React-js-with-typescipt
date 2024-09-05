import styled from "styled-components";
import { Trash, Copy, Plus } from "lucide-react";
export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #edf3fa;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const GripVerticalIcon = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 40px;
  background-color: white;
  justify-content: center;
  padding-top: 5px;
`;
export const ToolContainer = styled.div<{ hide?: boolean }>`
  border: 2px dashed #486eb0;
  background-color: #edf3fa;
  justify-content: center;
  align-items: center;
  height: 230px;
  justify-content: center;
  flex-direction: column;
  display: ${({ hide }) => (hide ? "flex" : "none")};
`;
export const ToolFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  gap: 50px;
  width: 600px;
`;

export const SectionButton = styled.div`
  border-radius: 5px;

  border: black;
  padding: 30px;

  background-color: white;
`;

export const PlusButton = styled(Plus)`
  background-color: #0680d7;
  z-index: 3;
  color: black;
  padding: 10px;
  height: 15px;
  font-weight: bold;
  position: absolute;
  top: -25px;
  left: 45%;
  width: 15px;
  border-radius: 50%;
  display: none;
`;
export const PlusArea = styled.div`
  height: 20px;
  width: 100%;
  &:hover ${PlusButton} {
    display: flex;
  }
`;
export const Icons = styled.div`
  display: flex;
  gap: 10px;
  z-index: 3;
`;

export const AllSection = styled.div`
  position: relative;
  width: 100%;
  border: 2px solid transparent;
  &:hover {
    border-color: #0577cc;
  }
  &:hover .sortableItem {
    display: flex;
  }
  &:hover .plusbtn {
    display: flex;
  }

  .sortableItem {
    position: absolute;
    left: -50px;
    top: 0;
    justify-content: space-between;
    width: calc(100% + 150px);
    z-index: 1;
    display: none;
    height: 100%;
  }
`;

export const Render = styled.div`
  position: inherit;
  z-index: 2;
`;

export const TrashIcon = styled(Trash)`
  padding: 8px;
  border-radius: 50%;
  color: red;
  background-color: white;
`;

export const CopyIcon = styled(Copy)`
  padding: 8px;
  border-radius: 50%;
  color: #565e6a;
  background-color: white;
`;

export const InputImg = styled.input`
  display: none;
`;
