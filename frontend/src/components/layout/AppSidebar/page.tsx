"use client";

import {
  Home,
  Inbox,
  Search,
  Settings,
  Star,
  Settings2Icon,
  User,
  DollarSign,
  Boxes,
  UserCog,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils"; // Utility for conditional classes
import { useSidebar } from "@/components/ui/sidebar"; // Hook to control sidebar state
import { useRouter } from "next/navigation";
import Image from "next/image";

const items = [
  { title: "Dashboard", url: "#", icon: Home, link: "/dashboard/user" },
  { title: "Events", url: "#", icon: Inbox, link: "/events" },
  { title: "Categories", url: "#", icon: Boxes, link: "/" },
  { title: "Favorites", url: "#", icon: Star, link: "/" },
  { title: "Search", url: "#", icon: Search, link: "/" },
  { title: "Settings", url: "#", icon: Settings, link: "/" },
];

const adminItems = [
  {
    title: "Events Management",
    url: "#",
    icon: Settings2Icon,
    link: "/",
  },
  {
    title: "Roles",
    url: "#",
    icon: UserCog,
    link: "/admin/roles",
  },
  { title: "Users & Organizers", url: "#", icon: User, link: "/admin/users" },
  { title: "Transactions & Payments", url: "#", icon: DollarSign, link: "/" },
  { title: "Settings", url: "#", icon: Settings, link: "/" },
];

export function AppSidebar() {
  const { isOpen } = useSidebar();
  const router = useRouter();

  return (
    <Sidebar
      className={cn(
        "fixed top-16 left-0 h-full  shadow-md w-64 transition-transform duration-300",
        "lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-64"
      )}
    >
      <SidebarHeader className="flex  px-4 py-3 font-inter">
        <div className="md:hidden flex items-center space-x-2">
          <Image
            src="/airbnb.svg"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="sidebar-menu-title font-semibold text-lg">
            Eventify
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="h-full flex flex-col">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="text-xl font-bold font-inter">
              Main Menu
            </SidebarGroupLabel>
            <SidebarMenu className="space-y-1">
              {items.map((item, index) => (
                <SidebarMenuItem
                  key={index}
                  onClick={() => router.push(item.link)}
                >
                  <SidebarMenuButton>
                    <item.icon size={24} />
                    <span className="text-lg font-inter">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarGroupLabel className="text-xl font-bold font-inter">
              Admin
            </SidebarGroupLabel>
            <SidebarMenu className="space-y-1">
              {adminItems.map((item, index) => (
                <SidebarMenuItem
                  key={index}
                  onClick={() => router.push(item.link)}
                >
                  <SidebarMenuButton>
                    <item.icon size={24} />
                    <span className="font-inter text-lg">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}
