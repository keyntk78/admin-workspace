"use client";
import { folders } from "@/lib/data/files";
import React, { useState } from "react";
import FolderItem from "../folder-item";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import { useRouter } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SortFile from "../sort-files";
import FileActions from "../file-actions";

export default function FileSystem() {
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [activeDragId, setActiveDragId] = useState<string | null>(null);
  const [foldersSelected, setFoldersSelected] = useState<string[]>([]);
  const [filesSelected, setFilesSelected] = useState<string[]>([]);
  const [showFileDetail, setShowFileDetail] = useState(false);

  const router = useRouter();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 30,
      },
    }),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event: DragStartEvent): void => {
    const { active } = event;
    if (!active) return;
    setIsDrag(true);
    setActiveDragId(active.id.toString());
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    setIsDrag(false);
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    resetFoldersSelected();
    router.refresh();
  };

  // * Selecting Folders and Files Actions
  const unselectAll = () => {
    resetFilesSelected();
    resetFoldersSelected();
  };
  const resetFilesSelected = () => {
    setFilesSelected([]);
  };
  const resetFoldersSelected = () => {
    setFoldersSelected([]);
  };

  const foldersSelectedWithMouse = (isChecked: boolean, id: string) => {
    setFoldersSelected((prev) => {
      if (isChecked) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const filesSelectedWithmouse = (isChecked: boolean, id: string) => {
    setFilesSelected((prev) => {
      if (isChecked) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="pt-6">
      <FileActions />
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        modifiers={[snapCenterToCursor]}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[20px]">Folders</h1>
          <SortFile />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {folders.map((folder) => (
            <FolderItem
              id={folder.id}
              key={folder.id}
              title={folder.title}
              foldersSelected={foldersSelected}
              isDrag={isDrag}
              resetFilesSelected={resetFilesSelected}
              foldersSelectedWithHotkey={foldersSelectedWithMouse}
            />
          ))}
        </div>

        {/* folders dragging overlay */}
        {activeDragId && activeDragId.startsWith("folder") && (
          <DragOverlay dropAnimation={null}>
            <div className="relative p-2 bg-white border rounded-sm border-gray-light-mode-300">
              <p className="text-center cursor-pointer truncate">
                {
                  folders.find(
                    (folder) => `folder-${folder.id}` === activeDragId
                  )?.title
                }
              </p>
              {foldersSelected.length > 1 ? (
                <p className="absolute px-2 py-0.5 text-xs text-white rounded-full -right-3 -top-3 bg-brand-800 h-fit">
                  {foldersSelected.length}
                </p>
              ) : null}
            </div>
          </DragOverlay>
        )}
      </DndContext>
    </div>
  );
}
