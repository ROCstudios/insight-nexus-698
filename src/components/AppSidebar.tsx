import { LayoutDashboard, Lightbulb, Target, Users, Sparkles, Calendar, FileText, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Milestones", url: "/milestones", icon: Lightbulb },
  { title: "Alternatives", url: "/alternatives", icon: Target },
  { title: "Pricing & Options", url: "/pricing", icon: Users },

];

export function AppSidebar() {
  return (
    <aside className="w-1/6 min-w-[100px] h-screen sticky top-0 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="px-8 py-10">
        <h2 className="font-bold text-2xl">
          Let's Book a Call
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
                `flex items-center gap-4 px-6 py-5 rounded-lg text-xl text-bold transition-all ${
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
