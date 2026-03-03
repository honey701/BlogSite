import React from "react";
import "./Pagination.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {

  const handleChange = (page) => {
    onPageChange(page);
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  };

  const getPages = () => {
    const pages = [];
    const delta = 1;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  const pages = getPages();

  return (
    <nav className="pagination">
      <button
        className="pagination__btn"
        disabled={currentPage === 1}
        onClick={() => handleChange(currentPage - 1)}
      >
        ← Prev
      </button>

      <div className="pagination__pages">
        {pages.map((page, i) =>
          page === "..." ? (
            <span key={i} className="pagination__ellipsis">...</span>
          ) : (
            <button
              key={page}
              className={`pagination__page ${
                currentPage === page ? "pagination__page--active" : ""
              }`}
              onClick={() => handleChange(page)}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="pagination__btn"
        disabled={currentPage === totalPages}
        onClick={() => handleChange(currentPage + 1)}
      >
        Next →
      </button>
    </nav>
  );
}