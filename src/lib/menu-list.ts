import {
    Tag,
    Users,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    Package,
    ShoppingCart,
    Box,
    StickyNote,
    MessageSquareMore,
    CircleUser,
    NotepadText,
    CalendarDays,
    Kanban
  } from "lucide-react"
  
  type Submenu = {
    href: string
    label: string
    active: boolean,
    submenus?: Submenu[];
  }
  
  type Menu = {
    href: string
    label: string
    active: boolean
    icon: any
    submenus: Submenu[]
  }
  
  type Group = {
    groupLabel: string
    menus: Menu[]
  }


  export function getMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "Home",
        menus: [
          {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname.includes("/dashboard"),
            icon: Package,
            submenus: []
          },
        //   {
        //     href: "/dashboard/ecommerce",
        //     label: "eCommerce",
        //     active: pathname.includes("/dashboard/ecommerce"),
        //     icon: ShoppingCart,
        //     submenus: []
        //   }
        ]
      },
      {
        groupLabel: "Apps",
        menus: [
          {
            href: "/files",
            label: "Files",
            active: pathname.includes("/files"),
            icon: Box,
            submenus: []
          },
        //   {
        //     href: "",
        //     label: "Blog",
        //     active: pathname.includes("/apps/blog"),
        //     icon: StickyNote,
        //     submenus: [
        //       {
        //         href: "/apps/blog/posts",
        //         label: "Posts",
        //         active: pathname === "/apps/blog/posts"
        //       },
        //       {
        //         href: "/apps/blog/detail",
        //         label: "Detail",
        //         active: pathname === "/apps/blog/detail"
        //       },
        //     ]
        //   },
        //   {
        //     href: "",
        //     label: "E-commerce",
        //     active: pathname.includes("/apps/ecommerce"),
        //     icon: ShoppingCart,
        //     submenus: [  
        //       {
        //         href: "/apps/ecommerce/shop",
        //         label: "Shop",
        //         active: pathname === "/apps/ecommerce/shop"
        //       },
        //       {
        //         href: "/apps/ecommerce/list",
        //         label: "List",
        //         active: pathname === "/apps/ecommerce/list"
        //       },
        //       {
        //         href: "/apps/ecommerce/detail",
        //         label: "Detail",
        //         active: pathname === "/apps/ecommerce/detail"
        //       },
        //       {
        //         href: "/apps/ecommerce/checkout",
        //         label: "Checkout",
        //         active: pathname === "/apps/ecommerce/checkout"
        //       }
        //   ]
        //   },
        //   {
        //     href: "/apps/chats",
        //     label: "Chats",
        //     active: pathname.includes("/apps/chats"),
        //     icon: MessageSquareMore,
        //     submenus: []
        //   },
        //   {
        //     href: "",
        //     label: "User Profile",
        //     active: pathname.includes("/apps/user-profile"),
        //     icon: CircleUser,
        //     submenus: [
        //       {
        //         href: "/apps/user-profile/profile",
        //         label: "Profile",
        //         active: pathname === "/apps/user-profile/profile"
        //       },
        //       {
        //         href: "/apps/user-profile/followers",
        //         label: "Followers",
        //         active: pathname === "/apps/user-profile/followers"
        //       },
        //       {
        //         href: "/apps/user-profile/friends",
        //         label: "Friends",
        //         active: pathname === "/apps/user-profile/friends"
        //       },
        //       {
        //         href: "/apps/user-profile/gallary",
        //         label: "Gallary",
        //         active: pathname === "/apps/user-profile/gallary"
        //       }
        //     ]
        //   },
        //   {
        //     href: "/apps/notes",
        //     label: "Notes",
        //     active: pathname.includes("/apps/notes"),
        //     icon: NotepadText,
        //     submenus: [

        //     ]
        //   },
        //   {
        //     href: "/apps/calendar",
        //     label: "Calendar",
        //     active: pathname.includes("/apps/calendar"),
        //     icon: CalendarDays,
        //     submenus: []
        //   },
        //   {
        //     href: "/apps/kanban",
        //     label: "Kanban",
        //     active: pathname.includes("/apps/kanban"),
        //     icon: Kanban,
        //     submenus: []
        //   }
        ]
      },
    //   {
    //     groupLabel: "Others",
    //     menus: [
    //       {
    //         href: "",
    //         label: "Menu level",
    //         active: pathname.includes("/others/menu-level"),
    //         icon: Package,
    //         submenus: [
    //           {
    //             href: "/others/menu-level/level-1",
    //             label: "level 1",
    //             active: pathname.includes("/others/menu-level/level-1"),
    //           },
    //           {
    //             href: "",
    //             label: "level 1",
    //             active: pathname.includes("/others/menu-level/level-1/level-2"),
    //             submenus: [ 
    //               {
    //                 href: "/others/menu-level/level-1/level-2",
    //                 label: "level 2",
    //                 active: pathname.includes("/others/menu-level/level-1/level-2"),
    //               },
    //               {
    //                 href: "",
    //                 label: "level 2",
    //                 active: pathname.includes("/others/menu-level/level-1/level-2/level-3"),
    //                 submenus: [
    //                   {
    //                     href: "/others/menu-level/level-1/level-2/level-3",
    //                     label: "level 3",
    //                     active: pathname.includes("/others/menu-level/level-1/level-2/level-3"),
    //                   },
    //                 ]
    //               }
    //           ]
    //           }
    //         ]
    //       },
    //       {
    //         href: "/others/chip",
    //         label: "Chip",
    //         active: pathname.includes("/others/chip"),
    //         icon: ShoppingCart,
    //         submenus: []
    //       }
    //     ]
    //   },
    ]
  }
  