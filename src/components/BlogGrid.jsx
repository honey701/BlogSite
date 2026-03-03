import React,{useEffect} from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import "./BlogGrid.css";

const POSTS_PER_PAGE = 4;

export default function BlogGrid({ posts, currentPage, onPageChange }) {
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visible = posts.slice(start, start + POSTS_PER_PAGE);
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <section className="blog-grid-section">
      {visible.length > 0 ? (
        <div className="blog-grid">
          {visible.map((post, i) => (
            <BlogCard key={post.id} post={post} animationDelay={i * 0.07} />
          ))}
        </div>
      ) : (
        <div className="blog-grid__empty">
          <span>🌿</span>
          <p>No posts found in this category.</p>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </section>
  );
}