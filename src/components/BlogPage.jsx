import React, { useState } from "react";
import CategoryNav from "./CategoryNav";
import BlogGrid from "./BlogGrid";
import Sidebar from "./Sidebar";
import { blogPosts } from "../data/blogData";
import "./BlogPage.css";

export default function BlogPage({ onSelectPost }) {
  const [activeTag , setActiveTag] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Simple category filter (in real app would filter by tag)
  const filteredPosts = blogPosts.filter((post) =>
    {
      const categoryMatch =
        activeCategory === "all" ||
        post.tags.some((t) =>
        t.toLowerCase().replace(/\s+/g,"-") ===
      activeCategory);
      const tagMatch =
      !activeTag || post.tags.includes(activeTag);

      return categoryMatch && tagMatch;
    });

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
  }

  return (
    <main className="blog-page">
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="blog-page__layout">
        <BlogGrid
          posts={filteredPosts}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onSelectPost={onSelectPost}
        />
        <Sidebar 
        activeTag={activeTag}
        onTagChange = {setActiveTag}
        />
      </div>
    </main>
  );
}
