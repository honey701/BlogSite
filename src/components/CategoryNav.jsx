import React from "react";
import { categories } from "../data/blogData";
import "./CategoryNav.css";

export default function CategoryNav({ activeCategory, onCategoryChange }) {
  return (
    <nav className="category-nav" aria-label="Blog categories">
      <div className="category-nav__inner">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`category-nav__tab${
              activeCategory === cat.value ? " category-nav__tab--active" : ""
            }`}
            onClick={() => onCategoryChange(cat.value)}
            aria-pressed={activeCategory === cat.value}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
