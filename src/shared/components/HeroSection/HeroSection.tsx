import { useLanguage } from "../../../shared/context/LanguageContext";
import SectionWrapper from "../../../layouts/Section/SectionWrapper";
import { texts } from "../../../shared/i18n";

import { Location } from "../Icons";
import { GitHub } from "../Icons";
import { LinkedIn } from "../Icons";
import MyPhoto from "../../../assets/me.jpg";

import styles from "./HeroSection.module.css";

type Props = {
  size?: number;
  color?: string;
};

const GreenDot = ({ size = 16, color = "#2ECC71" }: Props) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: color,
      boxShadow: `0 0 8px ${color}`,
    }}
  />
);

const HeroSection = () => {
  const { language } = useLanguage();

  const heroText = texts[language].hero;

  return (
    <SectionWrapper id="home" title={heroText.welcomeTitle}>
      <div className={styles.heroContent}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>{heroText.intro}</h2>
          <p>{heroText.skills}</p>
          <p>{heroText.extra}</p>

          <div className={styles.addictionalInfo}>
            <div>
              <Location size={18} color="black" />
              <p>{heroText.location}</p>
            </div>
            <div className={styles.addictionalInfoItem}>
              <GreenDot size={12} /> <p>{heroText.availability}</p>
            </div>
          </div>
        </div>

        <div className={styles.linksWrapper}>
          <div className={styles.imageWrapper}>
            <img src={MyPhoto} alt="Anastasiia Bojer" />
          </div>
          <div className={styles.quickLinks}>
            <a
              href="https://github.com/Anastasiia013"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub color="#2c3e50" size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/anastasiiabojer/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn color="#2c3e50" size={32} />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
