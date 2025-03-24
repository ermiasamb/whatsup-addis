import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "../AppSidebar/page";

function MainLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar();

  return (
    <div className="flex flex-1 mt-[4rem]">
      {/* Mobile Sidebar Trigger */}
      <SidebarTrigger className="lg:hidden fixed top-4 left-4 z-50 scale-150" />

      {/* Sidebar Component */}
      <AppSidebar />

      {/* Main Content (Expands when sidebar is hidden) */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
export default MainLayout;
