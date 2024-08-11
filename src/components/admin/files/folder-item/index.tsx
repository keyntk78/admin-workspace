import { useDraggable, useDroppable } from "@dnd-kit/core";
import { EllipsisVerticalIcon } from "lucide-react";
import { FaFolder } from "react-icons/fa";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import RightMenuContent from "./RightMenuContent";
import ButtonMore from "./ButtonMore";

interface FolderItemProps {
  id: string;
  title: string;
  isDrag: boolean;
  foldersSelected: string[];
  resetFilesSelected: () => void;
  foldersSelectedWithHotkey: (isChecked: boolean, id: string) => void;
}

export default function FolderItem({
  id,
  title,
  isDrag,
  foldersSelected,
  resetFilesSelected,
  foldersSelectedWithHotkey,
}: FolderItemProps) {
  const {
    setNodeRef: setDragRef,
    listeners,
    attributes,
  } = useDraggable({
    id: `folder-${id}`,
    data: foldersSelected,
    attributes: {
      role: "draggable-folder",
    },
  });

  const { setNodeRef: setDropRef, isOver } = useDroppable({
    disabled: foldersSelected.includes(id),
    id: id,
  });

  const style = {
    color: isOver ? "rgb(26 84 120)" : "",
    border: isOver ? "2px solid #2672A0" : "",
    backgroundColor: isOver ? "#F3F7FA" : "",
  };

  const handleFoldersSelected = (id: string) => {
    const isChecked = foldersSelected.includes(id);
    resetFilesSelected();

    foldersSelectedWithHotkey(isChecked, id);
  };

  const singleFolderSelected = foldersSelected.length === 1;

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger
          onAuxClick={() => {
            if (!foldersSelected.includes(id)) {
              handleFoldersSelected(id);
            }
          }}
        >
          <label
            htmlFor={id}
            ref={(node) => {
              setDragRef(node);
              setDropRef(node);
            }}
            {...attributes}
            {...listeners}
            style={style}
            className={`flex p-2  border rounded hover:bg-accent items-center gap-2 ${
              isDrag && foldersSelected.includes(id) ? "opacity-50" : ""
            } ${
              foldersSelected.includes(id)
                ? "ring-2 ring-accent bg-accent"
                : "bg-card"
            }`}
          >
            <Checkbox
              className="rounded-md size-4"
              checked={foldersSelected.includes(id)}
              id={id}
              name={id}
              onCheckedChange={() => {
                handleFoldersSelected(id);
              }}
            />
            <div className="flex items-center justify-between text-sm cursor-pointer grow">
              <div className="flex gap-2 items-center">
                <FaFolder size={20} className="text-[#fac515]" />
                <p>{title}</p>
              </div>
              <ButtonMore foldersSelected={foldersSelected} id={id}/>
            </div>
          </label>
          <RightMenuContent foldersSelected={foldersSelected} />
        </ContextMenuTrigger>
      </ContextMenu>
    </>
  );
}
