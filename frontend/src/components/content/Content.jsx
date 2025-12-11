import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

const ContentComponent = () => {
  return (
    <>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          height: "100%",
        }}
      >
        Content
      </Content>
    </>
  );
};

export default ContentComponent;