import { useState, useEffect } from "react";
import { useLanguage } from "../../../shared/context/LanguageContext";
import { texts } from "../../../shared/i18n";
import projects from "../../../pages/ProjectsPage/PortfoliosMenu";
import SectionWrapper from "../../../layouts/Section/SectionWrapper";

import DesktopSlider from "./DesktopSlider";
import styles from "./Projects.module.css";

const Projects = () => {
  const { language } = useLanguage();
  const t = texts[language].projects;

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SectionWrapper id="projects" title={t.title}>
      <div className={styles.portfolioSection}>
        {isDesktop && (
          <DesktopSlider
            projects={projects}
            titles={t.list.map((item) => item.title)}
            descriptions={t.list.map((item) => item.description)}
          />
        )}
      </div>
      <div className={styles.buttonTextWrapper}>
        <p>{t.moreInfo}</p>
        <div className={styles.buttonWrapper}>
          <a href="/portfolio" className={styles.viewAllButton}>
            {t.viewAll}
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
