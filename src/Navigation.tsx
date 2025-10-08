import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const Navigation = () => {
  return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
  );
};
export default Navigation;
