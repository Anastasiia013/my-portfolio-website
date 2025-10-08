import { useLanguage } from "../../../shared/context/LanguageContext";
import { texts } from "../../../shared/i18n";
import SectionWrapper from "../../../layouts/Section/SectionWrapper";
import skills from "./SkillItems";

import styles from "./SkillsPage.module.css";

const SkillsPage = () => {
  const { language } = useLanguage();
  const title = texts[language].sections.skills; 

  return (
    <SectionWrapper id="skills" title={title}>
      <div className={styles.skillItems}>
        {skills.map((skill, index) => (
          <div className={styles.skillBlock} key={index} title={skill.name}>
            {skill.icon}
            <span className={styles.nameSkill}>{skill.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsPage;
