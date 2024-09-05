import {
  Container,
  PlusButton,
  ToolFlex,
  InputImg,
  SectionButton,
  AllSection,
  ToolContainer,
  Render,
  PlusArea,
} from "./addsectionstyled";
import Tool from "../EdtingTool/tool";
import { SortableItem } from "./SortableItem";
import Footer from "../Footer/footer";
import { useContext } from "react";
import { MyContext } from "../Store/Context";
import { Section } from "../Store/contectType";
import ImageComponent from "../Images/ImageComponent";
import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Header from "../Header/header";
import { Plus } from "lucide-react";

export default function AddSection() {
  const {
    sections,
    handleAddImage,
    showAddSection,
    handleAddSections,
    handleDragEnd,
  } = useContext(MyContext);

  return (
    <Container>
      <Header />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={sections}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((data) => (
            <AllSection key={data.id}>
              <Plus className="plus" />

              <SortableItem id={data.id} />
              <Render>
                <RenderTool section={data} />
              </Render>
            </AllSection>
          ))}
        </SortableContext>
      </DndContext>
      <ToolContainer hide={showAddSection}>
        <h2>Add New Section</h2>
        <ToolFlex>
          <SectionButton as="button" onClick={handleAddSections}>
            Text
          </SectionButton>
          <SectionButton as="label" htmlFor="img">
            <InputImg id="img" type="file" onChange={handleAddImage} />
            Add Image
          </SectionButton>
        </ToolFlex>
      </ToolContainer>
      <Footer />
    </Container>
  );
}

const RenderTool = ({ section }: { section: Section }) => {
  switch (section.type) {
    case "editor":
      return <Tool />;

    case "image":
      return <ImageComponent src={section.section} />;

    default:
      return <></>;
  }
};
