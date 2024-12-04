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
const App: React.FC = () => {
  const title = "Tran Viet Anh";

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
