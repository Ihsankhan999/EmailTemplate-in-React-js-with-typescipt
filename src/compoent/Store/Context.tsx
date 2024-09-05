import { useState } from "react";
import { createContext } from "react";
import { Option } from "../Sidebar/type";
import { Footer, MyContextType, Section, StoreProps } from "./contectType";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";

export const MyContext = createContext<MyContextType>({
  CloseModel: () => {},
  sections: [],
  showModal: false,
  showFooterData: false,
  selectColor: undefined,
  bgColor: undefined,
  footerTextColor: undefined,
  footerLinkColor: undefined,
  footerBgColor: undefined,
  width: 2,
  alignment: undefined,
  showAddSection: false,

  changeWidth: () => {},
  OpenModel: () => {},
  GetBrand: () => {},
  handleAddSections: () => {},
  handleDeleteSection: () => {},
  inputValue: undefined,

  handleSelectColor: () => {},
  handleAlignmentChange: (newAlignment: any) => {},
  handleBgColor: () => {},
  setFooterTextColor: () => {},
  setFooterLinkColor: () => {},
  setFooterBgColor: () => {},
  showSectionModel: () => {},
  handleAddImage: (e: any) => {},
  handleCopySection: (id: number) => {},
  handleDragEnd: (event: any) => {},
  showfooterdataonModel: () => {},
  getData: (e: any) => {},

  footer: {
    name: "",
    address: "",
    phone: +92,
    email: "",
    showName: false,
    showAddress: false,
    showNumber: false,
    showEmail: false,
    label: "",
    value: "",
    background: "",
  },
});

export default function Context({ children }: StoreProps) {
  const [showModal, setShowModal] = useState<boolean | undefined>(false);
  const [showFooterData, setShowFooterData] = useState<boolean | undefined>(
    false
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [width, setWidth] = useState<number>(parseInt("10"));
  const [alignment, setAlignment] = useState("center");
  const [selectColor, handleSelectColor] = useState<Option | undefined>();
  const [bgColor, handleBgColor] = useState<Option | undefined>();
  const [footerTextColor, setFooterTextColor] = useState<Option | undefined>();
  const [footerLinkColor, setFooterLinkColor] = useState<Option | undefined>();
  const [footerBgColor, setFooterBgColor] = useState<Option | undefined>();
  const [sections, setSections] = useState<Section[]>([]);
  const [showAddSection, setAddSection] = useState(false);

  const [footer, setFooter] = useState<Footer>({
    name: "",
    address: "",
    phone: 0,
    email: "",
    showName: false,
    showAddress: false,
    showNumber: false,
    showEmail: false,
    label: "",
    value: "",
    background: "",
  });

  const genRandomId = () => {
    const id = Math.floor(Math.random() * 10 + 1);
    return id;
  };

  const getData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const checkboxes =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFooter({
      ...footer,
      [e.target.name]: value,
      [e.target.name]: checkboxes,
    });
  };

  const handleAddSections = () => {
    showSectionModel();
    const newSection: Section = {
      id: genRandomId(),
      section: "",
      type: "editor",
    };
    const allsections = [...sections, newSection];
    setSections(allsections);
  };

  const handleCopySection = (id: number) => {
    const newSection = sections.find((value) => value.id === id);
    if (newSection) {
      const allsections = [...sections, newSection];
      setSections(allsections);
    }
  };

  const handleAddImage = (e: any) => {
    showSectionModel();
    const newSection: Section = {
      id: genRandomId(),
      section: URL.createObjectURL(e.target.files[0]),
      type: "image",
    };
    const allsections = [...sections, newSection];
    setSections(allsections);
  };

  const handleDeleteSection = (id: number) => {
    const filteredSections = sections.filter((section) => section.id !== id);
    setSections(filteredSections);
  };

  const showSectionModel = () => {
    setAddSection(true);
  };

  const handleAlignmentChange = (newAlignment: string) => {
    setAlignment(newAlignment);
  };

  const changeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setWidth(value);
  };

  const GetBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brandTex = e.target.value;
    setInputValue(brandTex);
  };

  const OpenModel = () => {
    setShowModal((pre) => !pre);
  };
  const CloseModel = () => {
    setShowModal(false);
  };
  const showfooterdataonModel = () => {
    setShowFooterData((pre) => !pre);
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!active || !over) {
      return;
    }

    const activeId = active.id;
    const overId = over.id;

    if (activeId !== overId) {
      setSections((items) => {
        const oldIndex = items.findIndex((item) => item.id === activeId);
        const newIndex = items.findIndex((item) => item.id === overId);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  return (
    <MyContext.Provider
      value={{
        CloseModel,
        showModal,
        showFooterData,
        OpenModel,
        GetBrand,
        inputValue,
        handleAddSections,
        handleAlignmentChange,
        alignment,
        changeWidth,
        width,
        selectColor,
        showAddSection,
        handleSelectColor,
        bgColor,
        footerTextColor,
        footerBgColor,
        footerLinkColor,
        handleBgColor,
        setFooterBgColor,
        setFooterTextColor,
        setFooterLinkColor,
        handleDeleteSection,
        showSectionModel,
        sections,
        handleAddImage,
        handleCopySection,
        handleDragEnd,
        showfooterdataonModel,
        footer,
        getData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
