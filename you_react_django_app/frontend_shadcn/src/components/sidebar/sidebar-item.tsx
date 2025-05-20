import * as React from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { NavItem } from "@/types"

interface SidebarItemProps extends NavItem {
  isActive?: boolean
  collapsed?: boolean
}

const SidebarItem = ({
  title,
  href,
  icon,
  isActive,
  label,
  collapsed,
}: SidebarItemProps) => {
  if (collapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Link
            to={href}
            className={cn(
              buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
              "h-11 w-11",
              isActive && "bg-accent"
            )}
          >
            {icon}
            <span className="sr-only">{title}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-4">
          {title}
          {label && (
            <span className="ml-auto text-muted-foreground">
              {label}
            </span>
          )}
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <Link
      to={href}
      className={cn(
        buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
        "w-full justify-start",
        isActive && "bg-accent hover:bg-accent"
      )}
    >
      {icon}
      <span className="ml-2">{title}</span>
      {label && (
        <span className={cn("ml-auto")}>
          {label}
        </span>
      )}
    </Link>
  )
}

export { SidebarItem }