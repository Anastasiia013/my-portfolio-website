import styles from "./PageLayout.module.css";

import type { ReactNode } from "react";

type PageLayoutType = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutType) => {
  return <div className={styles.pageLayout}>{children}</div>;
};
export default PageLayout;
