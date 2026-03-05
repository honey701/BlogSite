import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";
import About from "./pages/about";
import CSR from "./pages/csr";
import Awards from "./pages/awards";
import Certifications from "./pages/certifications";
import Leadership from "./pages/leadership";
import Scrollontop from "./components/ScrollToTop";

function HomeWithInlineBlog() {
  return (
    <>
      <HeroBanner />
      <BlogPage />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Scrollontop />
      <Routes>
        <Route path="/" element={<HomeWithInlineBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/csr-policy" element={<CSR />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
