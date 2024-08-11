import { Button } from "@/components/ui/button";
import { ChevronRight, EllipsisVerticalIcon } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ButtonMore({
  foldersSelected,
  id,
}: {
  foldersSelected: string[];
  id: string;
}) {
  const disabled = foldersSelected.length > 1 && foldersSelected.includes(id);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={disabled}
        className="border-none focus-visible:outline-none"
      >
        <EllipsisVerticalIcon
          className={`w-6 h-6 ${disabled ? "text-accent" : "hover:text-ring"}`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 cursor-pointer">
        <DropdownMenuItem>
          <span>Open</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Download</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Rename</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Folder information</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <span>Details</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Activity</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>
          Show the number of files
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Shared</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
