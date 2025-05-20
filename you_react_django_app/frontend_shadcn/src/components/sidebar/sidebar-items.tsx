import * as React from "react"
import { cn } from "@/lib/utils"
import { SidebarItem } from "./sidebar-item"
import { NavItem } from "@/types"

interface SidebarItemsProps {
  items: NavItem[]
  pathname: string | null
  collapsed?: boolean
  className?: string
}

const SidebarItems = ({
  items,
  pathname,
  collapsed = false,
  className,
}: SidebarItemsProps) => {
  return (
    <div className={cn("space-y-1 px-2", className)}>
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          {...item}
          isActive={pathname === item.href}
          collapsed={collapsed}
        />
      ))}
    </div>
  )
}

export { SidebarItems }