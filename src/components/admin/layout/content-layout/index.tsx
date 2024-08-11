import NextBreadcrumb from "../next-breadcrumb";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="container pt-8 pb-8 px-4 sm:px-8">
      <NextBreadcrumb
        homeElement={"Home"}
        separator={<span> | </span>}
        activeClasses="text-amber-500"
        containerClasses="flex py-4 px-2 bg-card rounded-md border"
        listClasses="hover:underline mx-2 font-bold"
        capitalizeLinks
      />
      {children}
    </div>
  );
}
