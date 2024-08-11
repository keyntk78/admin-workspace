import React from "react";
import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu";
export default function RightMenuContent({
  foldersSelected,
}: {
  foldersSelected: string[];
}) {
  const singleFolderSelected = foldersSelected.length === 1;

  return (
    <ContextMenuContent className="w-64 cursor-pointer">
      <ContextMenuItem inset disabled={!singleFolderSelected}>
        Open
      </ContextMenuItem>
      <ContextMenuItem inset>Download</ContextMenuItem>
      <ContextMenuItem inset disabled={!singleFolderSelected}>
        Rename
      </ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger
          className={`${!singleFolderSelected ? "text-[#868890]" : ""}`}
          inset
          disabled={!singleFolderSelected}
        >
          Folder information
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>Details</ContextMenuItem>
          <ContextMenuItem>Activity</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      {singleFolderSelected && (
        <>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show the number of files
          </ContextMenuCheckboxItem>
        </>
      )}
      <ContextMenuSeparator />
      <ContextMenuItem inset>Shared</ContextMenuItem>
      <ContextMenuItem inset>Delete</ContextMenuItem>
    </ContextMenuContent>
  );
}
