import React, { useState } from "react";
import { allTags } from "../data/blogData";
import "./Widget.css";
import "./TagsWidget.css";

export default function TagsWidget({activeTag,onTagChange}) {
  // const [activeTag, setActiveTag] = useState(null);


  return (
    <div className="widget">
      <h3 className="widget__title">Popular Tags</h3>
      <div className="tags-cloud">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`tag-pill${activeTag === tag ? " tag-pill--active" : ""}`}
            onClick={() => onTagChange(activeTag === tag ? null : tag)}
            aria-pressed={activeTag === tag}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
