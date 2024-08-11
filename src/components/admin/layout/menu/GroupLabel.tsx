import React from "react";

export default function GroupLabel({ groupLabel }: { groupLabel: string }) {
  return (
    <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate uppercase">
      {groupLabel}
    </p>
  );
}
