"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { LayoutGrid, List, Plus, Search } from "lucide-react";
import ModalFormFolder from "../modal-form-folder";
import { Input } from "@/components/ui/input";

export default function RightActions() {
  const [layoutList, setLayoutList] = React.useState<boolean>(true);

  return (
    <div className="flex items-center gap-2">
      <div>
        <label htmlFor="search-file" className="sr-only">
          Search file
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search
              className="w-5 h-5 text-gray-light-mode-500"
              aria-hidden="true"
            />
          </div>
          <Input
            value={""}
            onChange={(value) => console.log("dasdasd")}
            className="block w-full border py-2 pl-10 pr-3 bg-background rounded-md ring-1 focus-visible:ring-0"
            placeholder="Search"
          />
        </div>
      </div>
      <Button
        className="flex items-center gap-1 p-2 bg-background hover:bg-background text-foreground border border-gray-light-mode-200 h-fit"
        onClick={() => setLayoutList(!layoutList)}
      >
        <div
          className={
            layoutList ? "rounded-sm bg-primary text-primary-foreground" : ""
          }
        >
          <span className="sr-only">Details</span>
          <List className="w-6 h-6" aria-hidden="true" />
        </div>
        <div
          className={
            layoutList ? "" : "rounded-sm bg-primary text-primary-foreground"
          }
        >
          <span className="sr-only">Large icons</span>
          <LayoutGrid />
        </div>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-2 focus-visible:outline-none focus-visible:ring-0">
            <Plus /> New
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={(e) => e.preventDefault()}
          >
            <ModalFormFolder />
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            File upload
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
