import { useLanguage } from "../../context/LanguageContext";
import { Download } from "../Icons";
import styles from "./DownloadCVButton.module.css";

const DownloadCVButton = () => {
  const { language } = useLanguage();

  const cvFiles: Record<string, string> = {
    eng: "/cv/Resume_ENG.pdf",
    de: "/cv/Resume_DE.pdf",
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFiles[language] || cvFiles.eng;
    link.download = `Resume_${language.toUpperCase()}.pdf`;
    link.click();
  };

  return (
    <button className={styles.download} onClick={handleDownload}>
      <p>Download CV</p>
      <Download size={18} color="white" />
    </button>
  );
};

export default DownloadCVButton;
