import React, { useState } from "react";
import CategoryNav from "./CategoryNav";
import BlogGrid from "./BlogGrid";
import Sidebar from "./Sidebar";
import MainBlogPage from "../pages/MainBlogPage";
import { blogPosts } from "../data/blogData";
import "./BlogPage.css";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSlug, setSelectedSlug] = useState(null);

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch =
      activeCategory === "all" ||
      post.tags.some((t) =>
        t.toLowerCase().replace(/\s+/g, "-") === activeCategory);
    const tagMatch = !activeTag || post.tags.includes(activeTag);
    return categoryMatch && tagMatch;
  });

  function handleSelectPost(slug) {
    setSelectedSlug(slug);
    setTimeout(() => {
      document.getElementById("blog-content-area")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function handleBack() {
    setSelectedSlug(null);
    setTimeout(() => {
      document.getElementById("blog-content-area")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
    setCurrentPage(1);
    setSelectedSlug(null);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <main className="blog-page">
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="blog-page__layout">
        <div id="blog-content-area" className="blog-page__content-area">
          {selectedSlug ? (
            <MainBlogPage slug={selectedSlug} onBack={handleBack} />
          ) : (
            <BlogGrid
              posts={filteredPosts}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onSelectPost={handleSelectPost}
            />
          )}
        </div>
        <Sidebar activeTag={activeTag} onTagChange={setActiveTag} />
      </div>
    </main>
  );
}
