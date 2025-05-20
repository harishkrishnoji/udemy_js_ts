import { Outlet } from 'react-router-dom'
// import { AppSidebar } from '@/components/sidebar/app-sidebar'
import Sidebar from '@/components/sidebar/sidebar'

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default App