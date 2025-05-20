import { Calendar, Home, Inbox, Search, Settings, ChevronDown } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent, } from "@/components/ui/collapsible";
// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
        submenu: [
            {
                title: 'Load Balance',
                icon: "TableCellsIcon",
                submenu: [
                    { id: "lb_provision", title: 'Provision', icon: "TableCellsIcon", path: '/requsetform' },
                    { id: "lb_modification", title: 'Modification', icon: "TableCellsIcon", path: '/requsetform1' },
                ],
            },
        ],
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
];
export function AppSidebar() {
    return (<Sidebar>
      {/* <SidebarSeparator /> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            {items.map((item) => (<Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <item.icon />
                        <span>{item.title}</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                      </a>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {items.map((item) => (<SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>);
}
