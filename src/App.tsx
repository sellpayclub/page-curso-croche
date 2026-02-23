import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LessonsPage from "./pages/LessonsPage";
import FiveCoursesPage from "./pages/FiveCoursesPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aulas" element={<LessonsPage />} />
      <Route path="/5cursos" element={<FiveCoursesPage />} />
    </Routes>
  );
}
