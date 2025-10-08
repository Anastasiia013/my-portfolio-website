import { Link } from "react-router-dom";
import { useLanguage } from "../../shared/context/LanguageContext";
import { texts } from "../../shared/i18n";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const { language } = useLanguage();
  const t = texts[language].notFound;

  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.description}>{t.description}</p>
        <Link to="/" className={styles.btnBackHome}>
          {t.backHome}
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
