import { Layout, Typography, Image } from "antd";
const { Content } = Layout;
const { Text } = Typography;
import { useTranslation } from "react-i18next";
import "../i18n";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Content
        id="home"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Content
          style={{
            width: "100%",
            margin: "0 10%",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Content
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Hi</Text>
          </Content>
          <Content
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
            }}
          ></Content>
        </Content>
      </Content>
    </>
  );
};

export default Home;
