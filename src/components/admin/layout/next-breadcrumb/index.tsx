"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <>
      <Breadcrumb className={containerClasses}>
        <BreadcrumbList>
          <BreadcrumbItem>
            {pathNames[0] != "dashboard" ? (
              <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
            ) : (
              <BreadcrumbPage>Home</BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {pathNames[0] != "dashboard" && pathNames.length > 0 && (
            <BreadcrumbSeparator />
          )}

          {pathNames[0] != "dashboard" &&
            pathNames.map((link, index) => {
              let href = `/${pathNames.slice(0, index + 1).join("/")}`;
              let itemClasses =
                paths === href
                  ? `${listClasses} ${activeClasses}`
                  : listClasses;
              let itemLink = capitalizeLinks
                ? link[0].toUpperCase() + link.slice(1, link.length)
                : link;
              return (
                <>
                  {paths === href ? (
                    <BreadcrumbPage key={index}>{itemLink}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbItem key={index}>
                        <BreadcrumbLink href={href}>{itemLink}</BreadcrumbLink>
                      </BreadcrumbItem>
                      {pathNames.length !== index + 1 && (
                        <BreadcrumbSeparator key={index} />
                      )}
                    </>
                  )}
                </>
              );
            })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default NextBreadcrumb;
