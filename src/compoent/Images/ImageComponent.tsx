import React from "react";
import { Container, Image } from "./ImageStyle";

const ImageComponent = ({ src }: { src: string }) => {
  return (
    <Container>
      <Image src={src} alt="img not found" />
    </Container>
  );
};

export default ImageComponent;
