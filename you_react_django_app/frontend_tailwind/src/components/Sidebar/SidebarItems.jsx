import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { sidebarData } from "./SidebarData";
import { Icon } from "./SidebarIcon";

const Sidebar = ({ collapsed }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => (
      <div key={item.id}>
        {item.path ? (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg ${
                isActive
                  // ? "bg-blue-500 text-white-200 dark:bg-blue"
                  // : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  ? "bg-blue-500 text-white-200"
                  : "hover:bg-gray-700"
              }`
            }
          >
            {item.icon && (
              <span className="mr-2">
                <Icon name={item.icon} className="h-4 w-4"/>
              </span>
            )}
            {!collapsed && <span className="flex-1 text-sm font-medium">{item.title}</span>}
          </NavLink>
        ) : (
        <div
          onClick={() => toggleItem(item.id)}
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            item.path
              // ? "hover:bg-gray-100 dark:hover:bg-gray-700"
              // : "hover:bg-gray-50 dark:hover:bg-gray-800"
              ? "hover:bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          {item.icon && (
            <span className="mr-2">
              <Icon name={item.icon} className="h-4 w-4"/>
            </span>
          )}
          {!collapsed && (
            <>
              <span className="flex-1 text-sm font-medium">
                {item.title}
              </span>
              {item.submenu && (
                expandedItems[item.id] ? (
                  <ChevronDownIcon className="w-4 h-4" />
                ) : (
                  <ChevronRightIcon className="w-4 h-4" />
                )
              )}
            </>
          )}
        </div>
        )}
        {item.submenu && expandedItems[item.id] && !collapsed && (
          <div className="ml-4">
            {renderMenuItems(item.submenu, level + 1)}
          </div>
        )}
      </div>

    ));
  };

  return (
    <div
      /*border-r border-gray-200 dark:border-gray-700*/
      // className={`h-[calc(100vh-9rem)] bg-gray-300 dark:bg-gray-950  ${
      //   collapsed ? "w-12" : "w-64"
      // } transition-all duration-300 ease-in-out`}
      className={`h-[calc(100vh-9rem)] bg-zinc-900  ${
        collapsed ? "w-10" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      <nav className="p-1">
        {renderMenuItems(sidebarData)}
      </nav>
    </div>
  );
};

export default Sidebar;