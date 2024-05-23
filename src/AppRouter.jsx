import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/ClassPage";

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/:category/:classl2" element={<CategoryPage />} />
    </Routes>
    </>
  );
};

export default AppRouter;
