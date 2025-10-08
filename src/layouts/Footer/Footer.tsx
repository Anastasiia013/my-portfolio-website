import {
  BackToTop,
  GitHub,
  LinkedIn,
  Mail,
} from "../../shared/components/Icons/index";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a target="_blank" href="https://github.com/Anastasiia013">
          <GitHub size={30} color="white" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/anastasiiabojer/">
          <LinkedIn size={30} color="white" />
        </a>
        <a target="_blank" href="mailto:anastasiiabojer@gmail.com">
          <Mail size={32} color="white" />
        </a>
      </div>

      <div className={styles.sign}>
        ©2025 Anastasiia Bojer.
        <span className={styles.rights}>All Rights Reserved.</span>
      </div>

      <button
        className={styles.backToTopBtn}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <BackToTop width={42} height={42} fill="white" />
      </button>
    </footer>
  );
};

export default Footer;
