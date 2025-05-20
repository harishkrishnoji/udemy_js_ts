import React, { useState } from 'react';
import { 
  FaAngleDown, 
  FaAngleRight, 
  FaHome, 
  FaFolder, 
  FaFile,
  FaCog,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa';
import { 
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpandFilled,
} from "react-icons/tb";
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <FaHome />,
      path: '/dashboard'
    },
    {
      title: 'Projects',
      icon: <FaFolder />,
      submenu: [
        {
          title: 'Web Projects',
          submenu: [
            {
              title: 'E-commerce',
              path: '/projects/web/ecommerce'
            },
            {
              title: 'Portfolio',
              path: '/projects/web/portfolio'
            }
          ]
        },
        {
          title: 'Mobile Apps',
          submenu: [
            {
              title: 'iOS',
              path: '/projects/mobile/ios'
            },
            {
              title: 'Android',
              path: '/projects/mobile/android'
            }
          ]
        }
      ]
    },
    {
      title: 'Documents',
      icon: <FaFile />,
      submenu: [
        {
          title: 'Technical',
          path: '/documents/technical'
        },
        {
          title: 'Financial',
          submenu: [
            {
              title: 'Reports',
              path: '/documents/financial/reports'
            },
            {
              title: 'Invoices',
              path: '/documents/financial/invoices'
            }
          ]
        }
      ]
    },
    {
      title: 'Settings',
      icon: <FaCog />,
      submenu: [
        {
          title: 'Account',
          path: '/settings/account'
        },
        {
          title: 'Security',
          submenu: [
            {
              title: 'Password',
              path: '/settings/security/password'
            },
            {
              title: '2FA',
              path: '/settings/security/2fa'
            }
          ]
        }
      ]
    }
  ];

  // const toggleMenu = (level, index) => {
  //   setExpandedMenus(prev => {
  //     const key = `${level}-${index}`;
  //     return {
  //       ...prev,
  //       [key]: !prev[key]
  //     };
  //   });
  // };

  const isMenuExpanded = (level, index) => {
    return expandedMenus[`${level}-${index}`];
  };

  const handleMouseEnter = (level, index) => {
    if (level === 'first' || level === 'second') {
      setExpandedMenus(prev => ({
        ...prev,
        [`${level}-${index}`]: true
      }));
    }
  };

  const handleMouseLeave = (level, index) => {
    if (level === 'first' || level === 'second') {
      setExpandedMenus(prev => ({
        ...prev,
        [`${level}-${index}`]: false
      }));
    }
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    // Close all menus when collapsing
    if (!collapsed) {
      setExpandedMenus({});
    }
  };

  const renderSubmenu = (items, level, parentIndex) => {
    return (
      <ul className={`submenu ${level}-submenu ${collapsed ? 'collapsed' : ''}`}>
        {items.map((item, index) => (
          <li 
            key={index}
            className="submenu-item"
            onMouseEnter={() => item.submenu && handleMouseEnter(level, `${parentIndex}-${index}`)}
            onMouseLeave={() => item.submenu && handleMouseLeave(level, `${parentIndex}-${index}`)}
          >
            <div className="submenu-title">
              <a href={item.path || '#'}>{item.title}</a>
              {item.submenu && (
                // <span className="arrow" onClick={(e) => {
                //   e.stopPropagation();
                //   toggleMenu(level, `${parentIndex}-${index}`);
                // }}>
                <span className="arrow">
                  {isMenuExpanded(level, `${parentIndex}-${index}`) ? 
                    <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
                </span>
              )}
            </div>
            {item.submenu && isMenuExpanded(level, `${parentIndex}-${index}`) && (
              renderSubmenu(item.submenu, 'third', `${parentIndex}-${index}`)
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          {!collapsed && <h3 className='ml-6'>Menu</h3>}
          <button onClick={toggleSidebar} className="toggle-btn">
            {collapsed ? <TbLayoutSidebarRightCollapseFilled /> : <TbLayoutSidebarRightExpandFilled />}
          </button>
        </div>
        
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li 
              key={index}
              className="menu-item"
              onMouseEnter={() => item.submenu && handleMouseEnter('first', index)}
              onMouseLeave={() => item.submenu && handleMouseLeave('first', index)}
            >
              <div className="menu-title">
                <span className="icon">{item.icon}</span>
                {!collapsed && (
                  <>
                    <a href={item.path || '#'}>{item.title}</a>
                    {item.submenu && (
                      <span className="arrow">
                        {isMenuExpanded('first', index) ? 
                          <FaAngleDown /> : <FaAngleRight />}
                      </span>
                    )}
                  </>
                )}
              </div>
              
              {item.submenu && isMenuExpanded('first', index) && (
                renderSubmenu(item.submenu, 'second', index)
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;