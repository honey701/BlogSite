import React, { useEffect, useState } from "react";
import { blogPosts } from "../data/blogData";
import "./BlogPost.css";

const AVATAR_URL = "logo2.svg"
function ContentBlock({ block }) {
  switch (block.type) {
    case "h2":        return <h2>{block.text}</h2>;
    case "h3":        return <h3>{block.text}</h3>;
    case "paragraph": return <p>{block.text}</p>;
    case "list":
      return <ul>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
    case "image":
      return <img src={block.src} alt={block.alt || ""} className="blog-content__inline-img" />;
    case "quote":
      return <blockquote className="blog-content__quote">{block.text}</blockquote>;
    default: return null;
  }
}

export default function BlogPostPage({ slug, onBack }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="blog-post">
        <nav className="blog-post__nav">
          <span className="blog-post__nav-label">The Nutra Health Blog</span>
          <button onClick={onBack} className="back-btn">
            <span className="arrow">←</span>
            <span className="btn-text">Back to Blog</span>
          </button>
        </nav>
        <div style={{ padding: "60px 24px", textAlign: "center" }}>
          <h2>Post not found</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-post">
      <div className="reading-bar" style={{ width: `${progress}%` }} />

      {/* ── Brown sticky nav ── */}
      <nav className="blog-post__nav">
        <span className="blog-post__nav-label">The Nutra Health Blog</span>
        <button onClick={onBack} className="back-btn">
          <span className="arrow">←</span>
          <span className="btn-text">Back to Blog</span>
        </button>
      </nav>

      {/* ── Hero image ── */}
      <div className="blog-post__hero-wrap">
        <img className="blog-post__hero" src={post.image} alt={post.title} />
      </div>

      {/* ── Brown intro zone: tags + title + meta ── */}
      <div className="blog-post__intro">
        <div className="blog-post__intro-inner">
          {post.tags.length > 0 && (
            <div className="blog-post__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-card__tag">{tag}</span>
              ))}
            </div>
          )}

          <h1>{post.title}</h1>

          <div className="blog-post__meta">
            <img className="blog-card__avatar" src={AVATAR_URL} alt={post.author} />
            <span>By {post.author}</span>
            <span className="blog-card__dot" aria-hidden="true" />
            <time>{post.date}</time>
          </div>
        </div>
      </div>

      {/* ── White article card ── */}
      <div className="blog-post__card-wrap">
        <div className="blog-post__card">
          <article className="blog-content">
            {post.content && post.content.length > 0
              ? post.content.map((block, i) => <ContentBlock key={i} block={block} />)
              : <p>Content coming soon.</p>
            }
          </article>

          <button onClick={onBack} className="back-btn back-btn--bottom">
            <span className="arrow">←</span>
            <span className="btn-text">Back to Blog</span>
          </button>
        </div>
      </div>

    </main>
  );
}
