import { useState } from "react";
import styles from "./Projects.module.css";

type Project = {
  id: number;
  image: string;
};

type Props = {
  projects: Project[];
  titles: string[];
  descriptions: string[];
};

const DesktopSlider = ({ projects, titles, descriptions }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.sliderWrapper}>
      <button className={styles.arrowLeft} onClick={prevSlide}>
        &#10094;
      </button>

      <div className={styles.slider}>
        {projects.map((project, index) => {
          let offset = index - currentIndex;
          if (offset < -Math.floor(projects.length / 2))
            offset += projects.length;
          if (offset > Math.floor(projects.length / 2))
            offset -= projects.length;

          if (Math.abs(offset) > 1) return null;

          return (
            <a key={project.id} href="/portfolio">
              <div
                className={styles.slide}
                style={{
                  transform: `translateX(${offset * 60}%) scale(${
                    offset === 0 ? 1 : 0.7
                  })`,
                  zIndex: offset === 0 ? 2 : 1,
                  opacity: offset === 0 ? 1 : 0.5,
                }}
              >
                <img
                  src={project.image}
                  alt={titles[index]}
                  className={styles.projectImage}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.title}>{titles[index]}</h3>
                  <p>{descriptions[index]}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <button className={styles.arrowRight} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default DesktopSlider;
