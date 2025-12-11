import React, { useState } from 'react';
import { Layout, theme } from 'antd';
const { Sider} = Layout;
import HeaderComponent from "./components/header/Header";
import ContentComponent from "./components/content/Content";
import SideBar from "./components/sidebar/SideBar"

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SideBar/>
      </Sider>
      <Layout>
        <HeaderComponent/>
        <ContentComponent/>
      </Layout>
      </>
    </Layout>
  );
};
export default App;