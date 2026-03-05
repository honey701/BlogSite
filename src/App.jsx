import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HeroBanner from "./components/HeroBanner";
import BlogPage from "./components/BlogPage";
import Footer from "./components/Footer";
import MainBlogPage from "./pages/MainBlogPage";
import About from "./pages/about";
import CSR from "./pages/csr";
import Awards from "./pages/awards";
import Certifications  from "./pages/certifications";
import Leadership  from "./pages/leadership";
import Scrollontop from "./components/ScrollToTop"

function HomeWithInlineBlog() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  function handleSelectPost(slug) {
    setSelectedSlug(slug);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }

  function handleBack() {
    setSelectedSlug(null);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }

  return (
    <>
      <HeroBanner />
      <div>
        {selectedSlug ? (
          <MainBlogPage slug={selectedSlug} onBack={handleBack} />
        ) : (
          <BlogPage onSelectPost={handleSelectPost} />
        )}
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Scrollontop />
      <Routes>
        <Route path="/" element={<HomeWithInlineBlog />} />

        {/* Company pages */}
        <Route path="/about" element={<About/>} />
        <Route path="/csr-policy" element={<CSR />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}