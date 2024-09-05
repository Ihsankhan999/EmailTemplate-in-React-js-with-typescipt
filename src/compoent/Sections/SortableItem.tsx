import React, { useContext } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Plus } from "lucide-react";
import {
  CopyIcon,
  GripVerticalIcon,
  Icons,
  PlusButton,
  TrashIcon,
} from "../Sections/addsectionstyled";
import { MyContext } from "../Store/Context";

type SectionsPropTypes = {
  id: number;
};

export function SortableItem(props: SectionsPropTypes) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const { handleDeleteSection, handleCopySection } =
    useContext(MyContext);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="sortableItem"
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <GripVerticalIcon>
        <GripVertical {...listeners} />
      </GripVerticalIcon>

      <Icons>
        <CopyIcon onClick={() => handleCopySection(props.id)} />
        <TrashIcon onClick={() => handleDeleteSection(props.id)} />
      </Icons>
    </div>
  );
}
