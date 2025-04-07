import react from "react"
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Sidebar from "./layouts/Sidebar"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function App() {
  return (
    <main>
                    <Sidebar></Sidebar>
                </main>
    // <ThemeProvider>
    // <ThemeToggle />
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <ProtectedRoute>
    //             <main>
    //                 <Sidebar></Sidebar>
    //             </main>
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/logout" element={<Logout />} />
    //     <Route path="*" element={<NotFound />}></Route>
    //   </Routes>
    // </BrowserRouter>
    // </ThemeProvider>
  )
}

export default App