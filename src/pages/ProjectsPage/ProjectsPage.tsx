import { useState, useEffect } from "react";
import { useLanguage } from "../../shared/context/LanguageContext";

import { texts } from "../../shared/i18n";
import SectionWrapper from "../../layouts/Section/SectionWrapper";
import projects from "./PortfoliosMenu";

import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = texts[language].projectsPage;

  useEffect(() => {
    document.body.style.overflow = modalImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalImage]);

  return (
    <>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <SectionWrapper id="" title={project.title} key={project.id}>
            <div className={styles.card}>
              <div className={styles.imagesBlock}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.webImage}
                    onClick={() =>
                      project.image2 && setModalImage(project.image2)
                    }
                  />
                )}
              </div>

              <div className={styles.cardContent}>
                <p className={styles.description}>{t.aboutProject}</p>
                <p className={styles.description}>{project.description}</p>

                {project.features && (
                  <p className={styles.addtext}>
                    {t.features} {project.features}
                  </p>
                )}

                {project.technologies && (
                  <p className={styles.addtext}>
                    {t.technologies} {project.technologies}
                  </p>
                )}

                {project.testData && (
                  <div className={styles.addtext}>
                    {t.testDataIntro}
                    <p>{project.testData}</p>
                  </div>
                )}

                <div className={styles.links}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {t.livePreview}
                  </a>
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {t.github}
                  </a>
                  {project.gitHub2 && (
                    <a
                      href={project.gitHub2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      {t.githubBackend}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>

      {modalImage && (
        <div className={styles.modal} onClick={() => setModalImage(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt="preview" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
