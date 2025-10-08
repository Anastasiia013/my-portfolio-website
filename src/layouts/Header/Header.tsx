import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../shared/context/ThemeContext";
import { useLanguage } from "../../shared/context/LanguageContext";
import { Theme, ArrowDown, CodeSlash } from "../../shared/components/Icons";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import BurgerMenu from "../../shared/components/BurgerMenu/BurgerMenu";
import DownloadCVButton from "../../shared/components/DownloadCVButton/DownloadCVButton";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1280);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();
  const iconColor = theme === "light" ? "black" : "white";
  const { language, setLanguage } = useLanguage();

  // Resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside language dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Lock scroll when burger is open
  useEffect(() => {
    document.body.style.overflow = burgerOpen ? "hidden" : "auto";
  }, [burgerOpen]);

  const handleLangClick = () => setLangOpen((prev) => !prev);

  const handleAnchor = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setBurgerOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.headerBox}>

        {!isMobile && (
          <div className={styles.logoImage}>
            <a
              onClick={() => {
                if (window.location.pathname !== "/") {
                  navigate("/", { replace: false });
                  setTimeout(
                    () => window.scrollTo({ top: 0, behavior: "smooth" }),
                    50
                  );
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setBurgerOpen(false);
              }}
            >
              <CodeSlash size={46} color={iconColor} />
            </a>
          </div>
        )}

        {!isMobile ? (
          <nav className={styles.nav}>
            <HeaderMenu onLinkClick={handleAnchor} />
          </nav>
        ) : (
          <BurgerMenu
            open={burgerOpen}
            setOpen={setBurgerOpen}
            color={iconColor}
          >
            <HeaderMenu onLinkClick={handleAnchor} />
          </BurgerMenu>
        )}

        <div className={styles.toggles}>
          <button onClick={toggleTheme} className={styles.themeSwitcher}>
            <Theme size={18} color={iconColor} />
          </button>

          <div className={styles.langSwitcher} ref={langRef}>
            <button
              onClick={handleLangClick}
              className={langOpen ? styles.langButtonActive : ""}
            >
              {language.toUpperCase()}
              <ArrowDown
                size={18}
                color={iconColor}
                className={`${styles.arrowIcon} ${
                  langOpen ? styles.arrowOpen : ""
                }`}
              />
            </button>
            {langOpen && (
              <ul className={styles.langList}>
                <li onClick={() => (setLanguage("eng"), setLangOpen(false))}>
                  ENG
                </li>
                <li onClick={() => (setLanguage("de"), setLangOpen(false))}>
                  DE
                </li>
              </ul>
            )}
          </div>

          <DownloadCVButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
