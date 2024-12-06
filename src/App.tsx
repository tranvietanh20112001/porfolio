import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
import { Helmet } from "react-helmet-async";
import HeaderComponent from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import MyExp from "./pages/MyExp";
import MyProject from "./pages/MyProject";
import Contact from "./pages/Contact";
// import { useMediaQuery } from "react-responsive";

const App: React.FC = () => {
  const title = "Tran Viet Anh";

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`This page is titled ${title}`} />
      </Helmet>

      <Layout>
        <HeaderComponent />
        <Content>
          <Home />
          <About />
          <MyExp />
          <MyProject />
          <Contact />
        </Content>
      </Layout>
    </>
  );
};

export default App;
