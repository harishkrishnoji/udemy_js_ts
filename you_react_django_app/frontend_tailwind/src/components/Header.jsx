import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const { user, logout } = useContext(AuthContext)
  
  return (
    <header className="bg-gray-300 dark:bg-gray-950 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 py-1 flex justify-between items-center">
        <h1 className="text-base font-bold text-gray-800 dark:text-white">FTS Network Services Automation</h1>
        <div className="flex items-center space-x-2">
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