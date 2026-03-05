import React from "react";
import "./BlogCard.css";

const AVATAR_URL ="/logo2.svg"
export default function BlogCard({ post, animationDelay = 0, onSelectPost }) {

  function handleClick(e) {
    e.preventDefault();
    if (onSelectPost) onSelectPost(post.slug);
  }

  return (
    <article
      className="blog-card"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <a
        href={`/blog/${post.slug}`}
        className="blog-card__img-wrap"
        onClick={handleClick}
      >
        <img
          className="blog-card__img"
          src={post.image}
          alt={post.title}
          loading="lazy"
        />
        <div className="blog-card__img-overlay" />
      </a>

      <div className="blog-card__body">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="blog-card__tags">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="blog-card__tag-pill">{tag}</span>
            ))}
          </div>
        )}

        {/* Meta */}
        <div className="blog-card__meta">
          <img
            className="blog-card__avatar"
            src={AVATAR_URL}
            alt={post.author}
          />
          <span className="blog-card__author">{post.author}</span>
          <span className="blog-card__dot" />
          <time className="blog-card__date">{post.date}</time>
        </div>

        {/* Title */}
        <h2 className="blog-card__title">
          <a href={`/blog/${post.slug}`} onClick={handleClick}>
            {post.title}
          </a>
        </h2>

        <p className="blog-card__excerpt">{post.excerpt}</p>

        <a
          href={`/blog/${post.slug}`}
          className="blog-card__read-more"
          onClick={handleClick}
        >
          Read More →
        </a>
      </div>
    </article>
  );
}