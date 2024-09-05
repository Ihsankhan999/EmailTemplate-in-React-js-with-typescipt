import {
  Container,
  Store,
  StoreInput,
  Alignment,
  Title,
  LeftButton,
  CenterButton,
  RightButton,
  HeaderStyle,
  SelectName,
  DropdownContainer,
  Chevron,
  Headings,
  SliderRange,
  HR,
  LeftAlign,
  RighAlign,
  CenterAlign,
  Slider,
  FormElements,
  StyleHeading,
} from "./sidebarstyled";
import DropDown from "./DropDown";
import { useContext } from "react";
import { MyContext } from "../Store/Context";

export default function Sidebar() {
  const MyStore = useContext(MyContext);

  const {
    showModal,
    inputValue,
    CloseModel,
    showFooterData,
    bgColor,
    footerTextColor,
    footerBgColor,
    footerLinkColor,
    GetBrand,
    handleAlignmentChange,
    width,
    changeWidth,
    selectColor,
    handleSelectColor,
    handleBgColor,
    setFooterBgColor,
    setFooterTextColor,
    setFooterLinkColor,
    footer,
    getData,
  } = MyStore;

  const colorOptions = [
    { value: "#EFAE91 ", background: "#EFAE91" },
    { value: "#FF6347 ", background: "#FF6347" },
    { value: "#FFA500 ", background: "#FFA500" },
    { value: "#D3D3D3", background: "#D3D3D3" },
    { value: "#E5E510", background: "#E5E510" },
    { value: "#F9192C", background: "#F9192C" },
    { value: "#1291DD", background: "#1291DD" },
    { value: "#F6334B", background: "#F6334B" },
    { value: "#6A5ACD", background: "#6A5ACD" },
    { value: "#F0E68C", background: "#F0E68C" },
    { value: "#00FF7F", background: "#00FF7F" },
    { value: "#00FFFF", background: "#00FFFF" },
    { value: "#7FFFD4", background: "#7FFFD4" },
    { value: "#00CED1", background: "#00CED1" },
    { value: "#008B8B", background: "#008B8B" },
    { value: "#00BFFF", background: "#00BFFF" },
    { value: "#191970", background: "#191970" },
    { value: "#FF00FF", background: "#FF00FF" },
    { value: "#C71585", background: "#C71585" },
    { value: "#F0F8FF", background: "#F0F8FF" },
    { value: "#DEB887", background: "#DEB887" },
  ];

  return (
    <>
      {showModal ? (
        <Container isOpen={showModal}>
          <>
            <HeaderStyle>
              <Chevron onClick={CloseModel} />
              Header
            </HeaderStyle>
            <HR />
            <Store>
              <Title>Store Branding</Title>
              <StoreInput
                type="text"
                value={inputValue}
                placeholder="Enter brand Name"
                onChange={GetBrand}
              ></StoreInput>
            </Store>
            <HR />
            <Store>
              <Headings>Alignment</Headings>
              <Alignment>
                <LeftButton onClick={() => handleAlignmentChange("left")}>
                  <LeftAlign />
                </LeftButton>
                <CenterButton onClick={() => handleAlignmentChange("center")}>
                  <RighAlign />
                </CenterButton>
                <RightButton onClick={() => handleAlignmentChange("right")}>
                  <CenterAlign />
                </RightButton>
              </Alignment>
              <Headings>Text Size</Headings>
              <SliderRange>
                <Slider
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={width}
                  onChange={changeWidth}
                ></Slider>
                {width}px
              </SliderRange>
            </Store>
            <HR />
            <DropdownContainer>
              <DropDown
                options={colorOptions}
                tabwidth="40px"
                onChange={(color) => handleSelectColor(color)}
                value={selectColor}
              />
              <SelectName>Text Color</SelectName>
            </DropdownContainer>
            <DropdownContainer>
              <DropDown
                options={colorOptions}
                tabwidth="40px"
                onChange={(bgcolor) => handleBgColor(bgcolor)}
                value={bgColor}
              />
              <SelectName>BG Color</SelectName>
            </DropdownContainer>
          </>
        </Container>
      ) : (
        <>
          <Container isOpen={showFooterData}>
            <HeaderStyle>
              <Chevron onClick={CloseModel} />
              Footer
            </HeaderStyle>
            <HR />
            <Store>
              <FormElements>
                <input
                  type="checkbox"
                  id="Name"
                  name="showName"
                  checked={footer.showName}
                  onChange={getData}
                />
                <label htmlFor="Name">Name</label>
              </FormElements>

              <StoreInput
                type="text"
                value={footer.name}
                name="name"
                placeholder="Enter shop name"
                onChange={getData}
              ></StoreInput>
            </Store>

            <Store>
              <FormElements>
                <input
                  type="checkbox"
                  id="address"
                  name="showAddress"
                  value="address"
                  checked={footer.showAddress}
                  onChange={getData}
                />
                <label htmlFor="Name">Address</label>
              </FormElements>

              <StoreInput
                type="text"
                name="address"
                value={footer.address}
                placeholder="Enter shop Address"
                onChange={getData}
              ></StoreInput>
            </Store>

            <Store>
              <FormElements>
                <input
                  type="checkbox"
                  id="phone"
                  name="showNumber"
                  value="phone"
                  checked={footer.showNumber}
                  onChange={getData}
                />
                <label htmlFor="Name">Phone Number</label>
              </FormElements>

              <StoreInput
                type="text"
                name="phone"
                value={footer.phone}
                placeholder="Enter Phone Number"
                onChange={getData}
              ></StoreInput>
            </Store>

            <Store>
              <FormElements>
                <input
                  type="checkbox"
                  id="email"
                  name="showEmail"
                  value="email"
                  checked={footer.showEmail}
                  onChange={getData}
                />
                <label htmlFor="Name">Email</label>
              </FormElements>

              <StoreInput
                type="text"
                name="email"
                value={footer.email}
                placeholder="Enter Email Address"
                onChange={getData}
              ></StoreInput>
            </Store>
            <HR />
            <StyleHeading>Style</StyleHeading>
            <DropdownContainer>
              <DropDown
                options={colorOptions}
                tabwidth="40px"
                value={footerBgColor}
                onChange={(color) => setFooterBgColor(color)}
              />
              <SelectName>Background</SelectName>
            </DropdownContainer>

            <DropdownContainer>
              <DropDown
                options={colorOptions}
                tabwidth="40px"
                onChange={(color) => setFooterTextColor(color)}
                value={footerTextColor}
              />
              <SelectName>Text</SelectName>
            </DropdownContainer>

            <DropdownContainer>
              <DropDown
                options={colorOptions}
                tabwidth="40px"
                onChange={(color) => setFooterLinkColor(color)}
                value={footerLinkColor}
              />
              <SelectName>Link</SelectName>
            </DropdownContainer>
          </Container>
        </>
      )}
    </>
  );
}
