import { Layout } from "antd";
const { Sider } = Layout;
import style from "./SideBar.module.css";
import sidebarlogo from "../../assets/sidebar-logo.png";
import Uploader from "./features/Uploader";

interface SideBarProps {
  collapsed?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ collapsed }) => {
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="20%"
        collapsedWidth="5%"
        style={{
          background: "#584294",
        }}
      >
        {!collapsed ? (
          <>
            <div className={style.name}>DocuMind-99</div>
            <div className={style.description}>
              <h2>Welcome to DocuMind</h2>
              <p>
                Upload your PDF and start a conversation with your documents.
                DocuMind lets you ask questions, generate summaries, and extract
                insights instantly using AI-powered analysis.
              </p>
              <p>
                Save time, avoid manual searching, and get precise answers
                directly from your files — just upload and chat.
              </p>
            </div>

            <Uploader />
          </>
        ) : (
          <img src={sidebarlogo} alt="D" className={style.logo} />
        )}
      </Sider>
    </>
  );
};

export default SideBar;
