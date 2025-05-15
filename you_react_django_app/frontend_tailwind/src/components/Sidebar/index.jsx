import { useState } from 'react'
import { motion } from 'framer-motion'
<<<<<<< HEAD
import SidebarItems from './SidebarItems'
import SidebarButton from './SidebarCollapseButton'
=======
import Logo from './Logo'
import SidebarItems from './SidebarItems'
import sidebarL from "../../assets/sidebar-left.png"
>>>>>>> 77d5424bb57c2d3db67ce14f1b2f173e73825236

const Sidebar = ({collapsed}) => {
  // const [collapsed, setCollapsed] = useState(false)
  
  return (
    <div
<<<<<<< HEAD
      className={`h-[calc(100vh-50px)] bg-gray-300 text-gray-950 dark:bg-gray-950 dark:text-white flex flex-col border-r border-gray-200 dark:border-gray-700 ${
        collapsed ? 'w-13' : 'w-64'
      }`}
=======
      className={`h-screen bg-zinc-900 text-white shadow-md flex flex-col border-r border-gray-700 ${collapsed ? 'w-12' : 'w-64'}`}
    //   className={`h-screen bg-gray-300 text-gray-950 dark:bg-gray-950 dark:text-white shadow-md flex flex-col border-r border-gray-200 dark:border-gray-700 ${
    //     collapsed ? 'w-12' : 'w-64'
    //   }`}
>>>>>>> 77d5424bb57c2d3db67ce14f1b2f173e73825236
      initial={{ width: 256 }}
      animate={{ width: collapsed ? 80 : 256 }}
      transition={{ duration: 10.3 }}
    >
      <motion.div className="flex scrollbar-thin overflow-auto">
        <SidebarItems collapsed={collapsed} />
      </motion.div>

      {/* <button
        className="absolute top-2 left-2 bg-blue-500 text-white p-2"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? 'Expand' : 'Collapse'}
      </button> */}
      {/* <SidebarButton /> */}
      {/* <button
        onClick={() => setCollapsed(!collapsed)}
        // className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        className="p-2 text-gray-400 hover:bg-gray-700"
      >
        {collapsed ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        )}
      </button> */}
      {/* //className="px-2 py-0 bg-red-500 text-white rounded-md hover:bg-red-600" */}
    </div>
  )
}

export default Sidebar