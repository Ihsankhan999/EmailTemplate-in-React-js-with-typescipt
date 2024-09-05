import { useContext } from "react";
import { Descreption, FooterItem, FooterLinks } from "./footerstyle";
import { MyContext } from "../Store/Context";
export default function Footer() {
  const MyStore = useContext(MyContext);

  const { footer, footerTextColor, footerBgColor, footerLinkColor, OpenModel } =
    MyStore;
  return (
    <Descreption
      onClick={OpenModel}
      Textcolor={footerTextColor ? footerTextColor.value : undefined}
      BgColor={footerBgColor ? footerBgColor.value : undefined}
    >
      {footer.showName && <FooterItem>{footer.name}</FooterItem>}

      {footer.showAddress && <FooterItem>{footer.address}</FooterItem>}

      {footer.showNumber && (
        <FooterLinks
          LinkColor={footerLinkColor ? footerLinkColor.value : undefined}
        >
          {footer.phone}
        </FooterLinks>
      )}

      {footer.showEmail && (
        <FooterLinks
          LinkColor={footerLinkColor ? footerLinkColor.value : undefined}
        >
          {footer.email}
        </FooterLinks>
      )}
    </Descreption>
  );
}
