import { ReactNode } from "react";
import { Option } from "../Sidebar/type";

export type Section = {
  id: number;
  section: string;
  type: string;
};


export type Footer={
  name:string,
  address:string,
  phone:number,
  email:string,
  showName: boolean;
  showAddress: boolean;
  showNumber: boolean;
  showEmail: boolean;
  label?: string;
  value: string;
  background?: string;
 
}

export type MyContextType = {
  showModal: boolean | undefined;
  showFooterData: boolean | undefined;
  CloseModel: () => void;
  handleAddSections: () => void;

  handleDeleteSection: (id:number) => void;
  OpenModel: () => void;
  showfooterdataonModel: () => void;
  showAddSection:boolean | undefined,
  showSectionModel:() => void;
  changeWidth: (e: any) => void;
  alignment: string | undefined;
  selectColor: Option | undefined;
  bgColor: Option | undefined;
  footerLinkColor: Option | undefined;
  footerTextColor: Option | undefined;
  footerBgColor: Option | undefined;
  GetBrand: (e: any) => void;
  inputValue: string | undefined;

  width: number | undefined;

  handleSelectColor: (color: Option) => void;
  handleBgColor:(color: Option) => void;
  setFooterTextColor:(color: Option) => void;
  setFooterLinkColor:(color: Option) => void;
  setFooterBgColor:(color: Option) => void;
  handleAlignmentChange: (newAlignment: any) => void;
  sections: Section[];
  handleAddImage:(e: any) => void;
  handleCopySection: (id:number) => void;
  handleDragEnd:(e: any) => void;
  getData:(e: any) => void;
  footer:Footer;
  


};

export type StoreProps = {
  children: ReactNode;
};

