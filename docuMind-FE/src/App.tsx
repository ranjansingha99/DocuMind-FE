import React, { useState } from "react";

import { Layout, theme } from "antd";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import HeaderSection from "./components/header/HeaderSection";

const { Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar collapsed={collapsed} />
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderSection collapsed={collapsed} setCollapsed={setCollapsed} colorBgContainer={colorBgContainer}/>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
