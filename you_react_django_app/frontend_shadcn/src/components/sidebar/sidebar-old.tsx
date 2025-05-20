import * as React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarHeader } from "./sidebar-header"
import { SidebarFooter } from "./sidebar-footer"
import { SidebarItem } from "./sidebar-item"
import { SidebarItems } from "./sidebar-items"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode
  footer?: React.ReactNode
  items?: React.ReactNode
  collapsed?: boolean
  collapsible?: boolean
  className?: string
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      header,
      footer,
      items,
      collapsed = false,
      collapsible = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "h-full border-r flex flex-col",
          "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          collapsed ? "w-[70px]" : "w-[240px]",
          className
        )}
        {...props}
      >
        {header && (
          <>
            {header}
            <Separator />
          </>
        )}
        
        <ScrollArea className="flex-1">
          {items}
        </ScrollArea>

        {footer && (
          <>
            <Separator />
            {footer}
          </>
        )}
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

export { Sidebar, SidebarHeader, SidebarFooter, SidebarItem, SidebarItems }