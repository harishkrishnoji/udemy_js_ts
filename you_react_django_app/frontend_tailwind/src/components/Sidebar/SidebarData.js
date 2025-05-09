export const sidebarData = [
  { id: "home", title: "Home", icon: "HomeIcon", path: "/home" },
  { id: "noclinks", title: "NOC Links", icon: "LinkIcon", path: "/profile" },
  { 
    id: "forwardnetworks",
    title: "Forward Networks",
    icon: "Square3Stack3DIcon",
    submenu: [
      { id: "address_translation", title: 'Address Translation', icon: "TableCellsIcon", path: '/nat' },
      { id: "lb_vip", title: 'LoadBalancer VIP', icon: "TableCellsIcon", path: '/vip' },
      {
        title: 'Access Control List',
        icon: "TableCellsIcon",
        submenu: [
          { id: "acl_fwdnet", title: 'ACL FwdNet', icon: "TableCellsIcon", path: '/fwdnet_acl' },
          { id: "acl_pano", title: 'ACL PanOS', icon: "TableCellsIcon", path: '/panos_acl' },
        ],
      },
    ], 
  },
  // { 
  //   id: "forwardnetworks1",
  //   title: "Forward Networks",
  //   icon: "Square3Stack3DIcon",
  //   submenu: [
  //     { id: "address_translation1", title: 'Address Translation', icon: "TableCellsIcon", path: '/nat' },
  //     { id: "lb_vip1", title: 'LoadBalancer VIP', icon: "TableCellsIcon", path: '/vip' },
  //     {
  //       title: 'Access Control List',
  //       icon: "TableCellsIcon",
  //       submenu: [
  //         { id: "acl_fwdnet1", title: 'ACL FwdNet', icon: "TableCellsIcon", path: '/fwdnet_acl' },
  //         { id: "acl_pano1", title: 'ACL PanOS', icon: "TableCellsIcon", path: '/panos_acl' },
  //       ],
  //     },
  //   ], 
  // },
  // { 
  //   id: "forwardnetworks2",
  //   title: "Forward Networks",
  //   icon: "Square3Stack3DIcon",
  //   submenu: [
  //     { id: "address_translation2", title: 'Address Translation', icon: "TableCellsIcon", path: '/nat' },
  //     { id: "lb_vip2", title: 'LoadBalancer VIP', icon: "TableCellsIcon", path: '/vip' },
  //     {
  //       title: 'Access Control List',
  //       icon: "TableCellsIcon",
  //       submenu: [
  //         { id: "acl_fwdnet2", title: 'ACL FwdNet', icon: "TableCellsIcon", path: '/fwdnet_acl' },
  //         { id: "acl_pano2", title: 'ACL PanOS', icon: "TableCellsIcon", path: '/panos_acl' },
  //       ],
  //     },
  //   ], 
  // },
  { 
    id: "requestcatelog",
    title: "Request Catelog",
    icon: "Square3Stack3DIcon",
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
  { id: "networkservices", title: "Network Services", icon: "CodeBracketIcon", path: "/networkservices" },
  { id: "networkinfo", title: "Network Info", icon: "TableCellsIcon", path: "/networkinfo" },
  { id: "swim", title: "SWIM Automation", icon: "ArrowPathRoundedSquareIcon", path: "/swim" },
//   { id: "requestcatelog", title: "Request Catelog", icon: "ArrowPathRoundedSquareIcon", path: "/requsetform" },
  { id: "setting", title: "Settings", icon: "CogIcon", path: "/setting" },
];