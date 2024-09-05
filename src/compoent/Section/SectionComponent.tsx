import { FC } from "react";
import { ToolFlex } from "./sectionstyled";

interface SectionProps {
  children: JSX.Element;
  hide: Boolean;
}

const SectionComponent: FC<SectionProps> = ({ children }) => {
  return <ToolFlex>{children}</ToolFlex>;
};

export default SectionComponent;
