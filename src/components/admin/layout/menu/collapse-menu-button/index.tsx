"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Dot, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import ListItem from "./ListItem";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  submenus?: Submenu[];
};

interface CollapseMenuButtonProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  submenus: Submenu[];
  isOpen: boolean | undefined;
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen,
}: CollapseMenuButtonProps) {
  const isSubmenuActive = submenus.some(
    (submenu) =>
      submenu.active || submenu.submenus?.some((child) => child.active)
  );
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({
    main: isSubmenuActive,
  });

  const toggleCollapse = (href: string) => {
    setCollapsed((prev) => ({ ...prev, [href]: !prev[href] }));
  };

  const renderSubmenus = (
    submenus: Submenu[],
    parentOpen: boolean | undefined
  ) => {
    return submenus.map(
      ({ href, label, active, submenus: childSubmenus }, index) => (
        <div key={index}>
          {childSubmenus ? (
            <Collapsible
              open={collapsed[href] ?? false}
              onOpenChange={() => toggleCollapse(href)}
              className="w-full"
            >
              <CollapsibleTrigger
                className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
                asChild
              >
                <Button
                  className={`w-full justify-start h-10 ${
                    active
                      ? "bg-background text-primary hover:bg-accent"
                      : "bg-background text-foreground hover:bg-accent"
                  }`}
                >
                  <div className="w-full items-center flex justify-between">
                    <div className="flex items-center">
                      <span className="mr-4 ml-2">
                        <Dot size={18} />
                      </span>
                      <p
                        className={cn(
                          "max-w-[170px] truncate",
                          parentOpen
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
                        parentOpen
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-96 opacity-0"
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
              <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                <div className="pl-4">
                  {renderSubmenus(childSubmenus, parentOpen)}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <Button
              key={index}
              className={`w-full justify-start h-10 mb-1 ${
                active
                  ? "bg-background text-primary hover:bg-accent"
                  : "bg-background text-foreground hover:bg-accent"
              }`}
              asChild
            >
              <Link href={href}>
                <span className="mr-4 ml-2">
                  <Dot size={18} />
                </span>
                <p
                  className={cn(
                    "max-w-[170px] truncate",
                    parentOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-96 opacity-0"
                  )}
                >
                  {label}
                </p>
              </Link>
            </Button>
          )}
        </div>
      )
    );
  };

  return isOpen ? (
    <Collapsible
      open={collapsed.main}
      onOpenChange={(open) => setCollapsed((prev) => ({ ...prev, main: open }))}
      className="w-full"
    >
      <ListItem active={active} isOpen={isOpen} label={label} Icon={Icon} />
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {renderSubmenus(submenus, isOpen)}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={active ? "secondary" : "ghost"}
                className="w-full justify-start h-10 mb-1"
              >
                <div className="w-full items-center flex justify-between">
                  <div className="flex items-center">
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <Icon size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        isOpen === false ? "opacity-0" : "opacity-100"
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="right" sideOffset={25} align="start">
        <DropdownMenuLabel className="max-w-[190px] truncate">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {renderSubmenus(submenus, isOpen)}
        <DropdownMenuArrow className="fill-border" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
