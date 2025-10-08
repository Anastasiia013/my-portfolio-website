import type { ReactNode } from "react";
import styles from "./SectionWrapper.module.css";

type SectionWrapperProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const SectionWrapper = ({ id, title, children }: SectionWrapperProps) => {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
