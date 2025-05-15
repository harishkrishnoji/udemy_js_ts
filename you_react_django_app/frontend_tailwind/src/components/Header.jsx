import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import SidebarButton from './Sidebar/SidebarCollapseButton'
import reactLogo from "../assets/fiserv_logo_orange_rgb.png";
import "../styles/Logo.css";

const Header = ({collapsed, setCollapsed}) => {
  const { user, logout } = useContext(AuthContext)
  
  return (
<<<<<<< HEAD
    <header className="bg-gray-300 dark:bg-gray-950 shadow-sm">
    {/* <header className="bg-gray-300 dark:bg-gray-950 shadow-sm"> */}
      <div className="max-w-8xl mx-auto px-4 py-1 flex">
        <SidebarButton collapsed={collapsed} setCollapsed={setCollapsed}/>
        {/* <Logo /> */}
        <div className="logo">
          <img src={reactLogo} className="logo"/>
        </div>
        <h1 className="text-sm text-gray-800 dark:text-white p-2">FTS Network Services Automation</h1>
        <div className="flex items-center space-x-2 ml-auto">
=======
    // <header className="bg-gray-300 dark:bg-gray-950 shadow-sm">
    <header className="bg-orange-500 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 py-1 flex justify-between items-center">
        <h1 className="text-base font-bold text-white">FTS Network Services Automation</h1>
        {/* <h1 className="text-base font-bold text-gray-800 dark:text-white">FTS Network Services Automation</h1> */}
        <div className="flex items-center space-x-2">
>>>>>>> 77d5424bb57c2d3db67ce14f1b2f173e73825236
          <ThemeToggle />
          {user && (
            <button
              onClick={logout}
              className="px-2 py-0 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Logout {user}
            </button>
          )}
        </div>
      </div>
      <hr/>
    </header>
  )
}

export default Header