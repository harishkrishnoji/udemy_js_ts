import React, { useState } from 'react';
import "./styles/Sidebar.css";
import Logo from "./components/Logo";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Switch } from 'antd';
import MenuList from "./components/MenuList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/LoginPage"
import Home from "./pages/HomePage"
import NotFound from "./pages/NotFoundPage"
import ProtectedRoute from "./components/ProtectedRoute"

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
  const [theme, setTheme] = useState('dark');
  const changeTheme = value => {
    setTheme(value ? 'light' : 'dark');
  };
  return (

  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout>
              <Sider className="sidebar" trigger={null} collapsible collapsed={collapsed}>
                <MenuList theme={theme}></MenuList>
              </Sider>
              <Layout>
                <Header className="header">
                  <Button className='collapse-button'
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                  />
                  <Logo></Logo>
                  <Switch onChange={changeTheme}/>
                </Header>
                <Home theme={theme}></Home>
              </Layout>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>



  );
};
export default App;