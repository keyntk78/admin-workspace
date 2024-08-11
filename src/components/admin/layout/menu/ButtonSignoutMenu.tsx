import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import React from "react";

export default function ButtonSignOutMenu({
  isOpen,
}: {
  isOpen: boolean | undefined;
}) {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            onClick={() => {}}
            variant="outline"
            className="w-full justify-center h-10 mt-5"
          >
            <span className={cn(isOpen === false ? "" : "mr-4")}>
              <LogOut size={18} />
            </span>
            <p
              className={cn(
                "whitespace-nowrap",
                isOpen === false ? "opacity-0 hidden" : "opacity-100"
              )}
            >
              Sign out
            </p>
          </Button>
        </TooltipTrigger>
        {isOpen === false && (
          <TooltipContent side="right">Sign out</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
