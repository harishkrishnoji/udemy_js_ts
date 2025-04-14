// import { useState, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../context/AuthContext'
import Form from "../components/forms/LoginForm"

const Login = () => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const { login } = useContext(AuthContext)
  // const navigate = useNavigate()

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   // In a real app, validate credentials here
  //   login({ email, name: 'John Doe' })
  //   navigate('/dashboard')
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {/* <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">Sign in</h2> */}
        <Form route="/api/token/" method="login" />
        {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              // type="email"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form> */}
      </div>
    </div>
  )
}

export default Login