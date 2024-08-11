import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function SingleLevel({
  active,
  href,
  isOpen,
  label,
  Icon,
}: {
  active: boolean;
  href: string;
  isOpen: boolean | undefined;
  label: string;
  Icon: any;
}) {
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button
            variant={active ? "default" : "ghost"}
            className="w-full justify-start h-10 mb-1"
            asChild
          >
            <Link href={href}>
              <span className={cn(isOpen === false ? "" : "mr-4")}>
                <Icon size={18} />
              </span>
              <p
                className={cn(
                  "max-w-[200px] truncate",
                  isOpen === false
                    ? "-translate-x-96 opacity-0"
                    : "translate-x-0 opacity-100"
                )}
              >
                {label}
              </p>
            </Link>
          </Button>
        </TooltipTrigger>
        {isOpen === false && (
          <TooltipContent side="right">{label}</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
