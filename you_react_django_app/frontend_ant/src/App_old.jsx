import react from "react"
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/LoginPage"
import Home from "./pages/HomePage"
import NotFound from "./pages/NotFoundPage"
import ProtectedRoute from "./components/ProtectedRoute"
// import Sidebar from "./layouts/Sidebar"
import Sidebar from "./layouts/Sidebar_new"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function App() {
  return (
    // <main>
    //                 <Sidebar></Sidebar>
    //             </main>
    <ThemeProvider>
    {/* <ThemeToggle /> */}
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
                <main>
                    <Sidebar></Sidebar>
                    <Home></Home>
                </main>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App