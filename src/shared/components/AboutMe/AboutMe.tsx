import { useState, useEffect } from "react";
import { useLanguage } from "../../../shared/context/LanguageContext";

import { texts } from "../../../shared/i18n";
import SectionWrapper from "../../../layouts/Section/SectionWrapper";

import CertificateENG from "../../../assets/certificates/Certificate-ENG.jpg";
import CertificateDE from "../../../assets/certificates/Certificate-DE.jpg";

import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const { language } = useLanguage();
  const aboutText = texts[language].about;

  const photo =
    language === "eng"
      ? CertificateENG
      : language === "de"
      ? CertificateDE
      : null;

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  if (!photo) return null;

  return (
    <SectionWrapper id="about" title={aboutText.title}>
      <div className={styles.aboutMe}>
        <div className={styles.imageWrapper}>
          <img
            src={photo}
            alt={`certificate-${language}`}
            onClick={() => setModalOpen(true)}
            className={styles.certificates}
            style={{ cursor: "pointer", marginBottom: "10px" }}
          />
        </div>

        <div className={styles.text}>
          <h2 className={styles.textIntro}>{aboutText.intro}</h2>
          {aboutText.description.map((line, idx) =>
            line.includes("—") ? (
              <li key={idx} dangerouslySetInnerHTML={{ __html: line }} />
            ) : (
              <p key={idx} dangerouslySetInnerHTML={{ __html: line }} />
            )
          )}
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modal} onClick={() => setModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={photo} alt={`preview-${language}`} />
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default AboutMe;
