import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

// const MainLayout = () => {
//   return (
//     // <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
//     <div className="flex h-screen bg-gray-200 dark:bg-gray-900 text-gray-950 dark:text-white">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header />
//         <main className="flex-1 overflow-y-auto p-4">
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   )
// }

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    // <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
<<<<<<< HEAD
    <>
    <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden bg-gray-200 dark:bg-gray-900 text-gray-950 dark:text-white">
      <Sidebar collapsed={collapsed}/>
      <main className="w-full h-full flex-grow overflow-auto p-4">
        <Outlet />
      </main>
=======
    <div className="flex h-screen bg-gray-200 dark:bg-zinc-800 text-gray-950 dark:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-2">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
>>>>>>> 77d5424bb57c2d3db67ce14f1b2f173e73825236
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default MainLayout