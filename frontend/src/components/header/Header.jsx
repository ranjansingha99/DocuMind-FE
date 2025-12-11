import style from "./Header.module.css";
import { Button, Layout} from 'antd';
const { Header} = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useState } from "react";

const HeaderComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Header style={{ padding: 0}}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        Header
      </Header>
    </>
  );
};

export default HeaderComponent;
