import { LayoutDashboard, Lightbulb, Target, Users, Sparkles, Calendar, FileText, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Insights", url: "/insights", icon: Lightbulb },
  { title: "Opportunities", url: "/opportunities", icon: Target },
  { title: "Teams", url: "/teams", icon: Users },
  { title: "Simulator", url: "/simulator", icon: Sparkles },
  { title: "Roadmap", url: "/roadmap", icon: Calendar },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <aside className="w-1/4 min-w-[300px] h-screen sticky top-0 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="px-8 py-10">
        <h2 className="font-bold text-4xl bg-gradient-primary bg-clip-text text-transparent">
          Strategy Platform
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 py-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              end={item.url === "/"}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-5 rounded-lg text-2xl font-medium transition-all ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                }`
              }
            >
              <item.icon className="h-8 w-8 flex-shrink-0" />
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
}
