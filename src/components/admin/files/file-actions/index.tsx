import React from "react";
import FilterActions from "./FilterActions";
import RightActions from "./RightActions";

export default function FileActions() {
  return (
    <div className="flex justify-between items-center py-4">
      <FilterActions />
      <RightActions />
    </div>
  );
}
