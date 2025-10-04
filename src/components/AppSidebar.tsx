import { LayoutDashboard, Lightbulb, Target, Users, Sparkles, Calendar, FileText, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Insights", url: "/insights", icon: Lightbulb },
  { title: "Opportunities", url: "/opportunities", icon: Target },
  { title: "Teams", url: "/teams", icon: Users },
  { title: "Simulator", url: "/simulator", icon: Sparkles },
  { title: "Roadmap", url: "/roadmap", icon: Calendar },
  { title: "Reports", url: "/reports", icon: FileText },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="px-6 py-8">
          <h2 className={`font-bold text-3xl bg-gradient-primary bg-clip-text text-transparent transition-all ${!open && "text-center text-4xl"}`}>
            {open ? "Strategy Platform" : "SP"}
          </h2>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xl px-4">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium text-2xl py-6"
                          : "hover:bg-sidebar-accent/50 text-2xl py-6"
                      }
                    >
                      <item.icon className="h-8 w-8" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/settings" className="hover:bg-sidebar-accent/50 text-2xl py-6">
                    <Settings className="h-8 w-8" />
                    {open && <span>Settings</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
