import { Layout } from "antd";
const { Footer } = Layout;

const Footers = () => {
  return (
    <div>
      <Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default Footers;
