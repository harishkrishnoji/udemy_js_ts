import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    // <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
    <div className="flex h-screen bg-gray-200 dark:bg-zinc-800 text-gray-950 dark:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-2">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default MainLayout