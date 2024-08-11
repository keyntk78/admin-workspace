import { Button } from "@/components/ui/button";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function ListItem({
  active,
  Icon,
  isOpen,
  label,
}: {
  active: boolean;
  Icon: any;
  isOpen: boolean;
  label: string;
}) {
  return (
    <CollapsibleTrigger
      className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
      asChild
    >
      <Button
        variant={active ? "default" : "ghost"}
        className="w-full justify-start h-10"
      >
        <div className="w-full items-center flex justify-between">
          <div className="flex items-center">
            <span className="mr-4">
              <Icon size={18} />
            </span>
            <p
              className={cn(
                "max-w-[150px] truncate",
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-96 opacity-0"
              )}
            >
              {label}
            </p>
          </div>
          <div
            className={cn(
              "whitespace-nowrap",
              isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0"
            )}
          >
            <ChevronDown
              size={18}
              className="transition-transform duration-200"
            />
          </div>
        </div>
      </Button>
    </CollapsibleTrigger>
  );
}
