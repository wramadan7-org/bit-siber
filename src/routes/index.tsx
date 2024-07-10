import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import NewsPage from "../pages/news";
import ContactPage from "../pages/contact";
import SolutionPage from "../pages/solutions";
import ServicePage from "../pages/services";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/service" element={<ServicePage />} />
        </Routes>
    )
}

export default AppRoutes;
