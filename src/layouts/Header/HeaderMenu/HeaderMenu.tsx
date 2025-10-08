import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../../shared/context/LanguageContext";
import { texts } from "../../../shared/i18n";
import styles from "./HeaderMenu.module.css";

type HeaderMenuProps = {
  onLinkClick: (id: string) => void;
};

const HeaderMenu = ({ onLinkClick }: HeaderMenuProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();

  const sections = Object.keys(texts[language].sections);

  useEffect(() => {
    if (location.pathname === "/portfolio") {
      setActiveSection("portfolio");
    } else if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 3;
        for (const section of sections) {
          const elem = document.getElementById(section);
          if (elem) {
            const top = elem.offsetTop;
            const bottom = top + elem.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname, sections]);

  const handleClick = (section: string) => {
    if (section === "portfolio") {
      navigate("/portfolio");
    } else {
      onLinkClick(section);
    }
  };

  return (
    <ul className={styles.navbarMenu}>
      {sections.map((section) => (
        <li
          key={section}
          className={`${styles.menu} ${
            activeSection === section ? styles.active : ""
          }`}
          onClick={() => handleClick(section)}
        >
          {
            texts[language].sections[
              section as keyof (typeof texts)[typeof language]["sections"]
            ]
          }
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
