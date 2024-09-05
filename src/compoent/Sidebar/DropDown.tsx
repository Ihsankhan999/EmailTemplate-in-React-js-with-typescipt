import React, { useState } from "react";
import {
  ColorsOptions,
  Scrollbar,
  DropDownBtn,
} from "../Sidebar/sidebarstyled";
import { DropDownProps, Option } from "./type";

const DropDown: React.FC<DropDownProps> = ({
  options,
  onChange,
  tabwidth,
  value,
}: DropDownProps): JSX.Element => {
  const onClickHandler = (value: Option): void => {
    onChange(value);
  };

  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  return (
    <DropDownBtn
      BgColors={value?.background}
      onClick={toggleDropDown}
      onBlur={dismissHandler}
    >
      {value?.label || ""}

      <Scrollbar show={showDropDown}>
        {options.map((option: Option, index: number): JSX.Element => {
          return (
            <ColorsOptions
              optionsColors={option.value}
              tabwidth={tabwidth}
              key={index}
              onClick={(): void => {
                onClickHandler(option);
              }}
            ></ColorsOptions>
          );
        })}
      </Scrollbar>
    </DropDownBtn>
  );
};

export default DropDown;
