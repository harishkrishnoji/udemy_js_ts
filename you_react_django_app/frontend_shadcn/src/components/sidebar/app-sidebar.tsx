import { Home, Settings, Users, Folder, Calendar, Mail } from "lucide-react"
import { Sidebar } from "@/components/sidebar/sidebar"
import { SidebarHeader } from "@/components/sidebar/sidebar-header"
import { SidebarFooter } from "@/components/sidebar/sidebar-footer"
import { SidebarItems } from "@/components/sidebar/sidebar-items"

import { Button } from "@/components/ui/button"
import { useLocation } from "react-router-dom"
import { useState } from "react"

export function AppSidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="h-4 w-4" />,
      label: "",
    },
    {
      title: "Projects",
      href: "/projects",
      icon: <Folder className="h-4 w-4" />,
      label: "128",
    },
    {
      title: "Team",
      href: "/team",
      icon: <Users className="h-4 w-4" />,
      label: "",
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: <Calendar className="h-4 w-4" />,
      label: "",
    },
    {
      title: "Messages",
      href: "/messages",
      icon: <Mail className="h-4 w-4" />,
      label: "16",
    },
  ]

  return (
    <Sidebar
      collapsed={collapsed}
      collapsible
      header={
        <SidebarHeader>
          {!collapsed && <h1 className="text-lg font-semibold">My App</h1>}
        </SidebarHeader>
      }
      items={<SidebarItems items={navItems} pathname={location.pathname} collapsed={collapsed} />}
      footer={
        <SidebarFooter>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Settings className="h-4 w-4" />
          </Button>
        </SidebarFooter>
      }
    />
  )
}