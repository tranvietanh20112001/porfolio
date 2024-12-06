import { Layout, Menu, Typography, Switch } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { useMediaQuery } from "react-responsive";

const { Header } = Layout;
const { Text, Title } = Typography;

const HeaderComponent = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Links = [
    { name: "home", section: "home" },
    { name: "about", section: "about" },
    { name: "experiment", section: "myExp" },
    { name: "projects", section: "projects" },
    { name: "contact", section: "contact" },
  ];

  const handleLanguageSwitch = (checked: boolean) => {
    const newLang = checked ? "en" : "vn";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <Header
      style={{
        padding: 0,
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          flex: 1,
          minWidth: 0,
          display: isTabletOrMobile ? "none" : "flex",
          width: "60%",
          margin: "0 20%",
          justifyContent: "space-between",
        }}
      >
        {Links.map((link) => (
          <HoverableText
            key={link.section}
            onClick={() => scrollToSection(link.section)}
          >
            {t(link.name)}
          </HoverableText>
        ))}

        <Switch
          checked={language === "en"}
          checkedChildren="EN"
          unCheckedChildren="VN"
          onChange={handleLanguageSwitch}
        />
      </Menu>

      <Title level={3} style={{ color: "white", margin: "0 auto" }}>
        Tran Viet Anh
      </Title>
    </Header>
  );
};

const HoverableText = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Text
      onClick={onClick}
      style={{
        color: hovered ? "white" : "gray",
        transition: "color 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Text>
  );
};

export default HeaderComponent;
