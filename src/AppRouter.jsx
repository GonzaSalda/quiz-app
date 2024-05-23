import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/:category/:category" element={<CategoryPage />} />
    </Routes>
    </>
  );
};

export default AppRouter;
