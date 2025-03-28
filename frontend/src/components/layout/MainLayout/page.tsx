import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "../AppSidebar/page";
import { useAuth } from "@/context/AuthContext";

function MainLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar();
  const { user } = useAuth(); // Assuming you have a useAuth hook to get the user
  return user ? (
    <div className="flex flex-1 mt-[4rem]">
      {/* Mobile Sidebar Trigger */}
      <SidebarTrigger className="lg:hidden fixed top-4 left-4 z-50 scale-150" />

      {/* Sidebar Component */}
      <AppSidebar currentUser={user} />

      {/* Main Content (Expands when sidebar is hidden) */}
      <main
        className={`flex-1 font-poppins transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {children}
      </main>
    </div>
  ) : null;
}
export default MainLayout;
