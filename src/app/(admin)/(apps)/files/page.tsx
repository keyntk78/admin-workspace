import FileSystem from "@/components/admin/files/files-system";
import { ContentLayout } from "@/components/admin/layout/content-layout";
import React from "react";

export default function page() {
  return (
    <ContentLayout>
      <FileSystem />
    </ContentLayout>
  );
}
