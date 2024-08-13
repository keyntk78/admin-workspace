"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa";

export default function SortFile() {
  const [sortASC, setSortASC] = useState(true);
  const [sortBy, sertSortBy] = useState<string>("Name");

  return (
    <div className="flex items-center">
      <Button
        className="bg-background2 rounded-full hover:bg-accent"
        onClick={() => setSortASC(!sortASC)}
      >
        <ArrowUp
          className={`text-foreground ${!sortASC ? "rotate-180" : ""}`}
          size={20}
        />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-background2 text-foreground hover:bg-accent rounded-full gap-1">
            {sortBy}
            <FaCaretDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>Sort By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={sortBy} onValueChange={sertSortBy}>
            <DropdownMenuRadioItem value="Name">Name</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Last modified">
              Last modified
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Last modified by me">
              Last modified by me
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
