import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import "./BlogPost.css";

const AVATAR_URL =
  "https://www.nutraj.com/cdn/shop/files/Nutraj_logo_37x37-100_37X_5f794a31-d434-4491-bcb8-7748d75bc1f0_37X.jpg?v=1683551728";

// Renders a single content block based on its type
function ContentBlock({ block }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "paragraph":
      return <p>{block.text}</p>;
    case "list":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "image":
      return (
        <img
          src={block.src}
          alt={block.alt || ""}
          className="blog-content__inline-img"
        />
      );
    case "quote":
      return (
        <blockquote className="blog-content__quote">
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPostPage() {
    const [progress, setProgress] = useState(0);

useEffect(() => {
  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (scrollTop / height) * 100;
    setProgress(scrolled);
  };

  window.addEventListener("scroll", updateScroll);

  return () => window.removeEventListener("scroll", updateScroll);
}, []);
  const { slug } = useParams();
const navigate = useNavigate();

const post = blogPosts.find((p) => p.slug === slug);

  // Fallback if slug doesn't match any post
  if (!post) {
    return (
      <main className="blog-post">
        <div className="blog-post__container">
          <button onClick={goBack} className="back-btn">← Back to Blog</button>
          <h1>Post not found</h1>
          <p>The blog post you're looking for doesn't exist yet.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-post">
            <div
        className="reading-bar"
        style={{ width: `${progress}%` }}
        ></div>
      <div className="blog-post__container">
        

<button onClick={() => navigate(-1)} className="back-btn">
  ← Back to Blog
</button>
        <img
          className="blog-post__hero"
          src={post.image}
          alt={post.title}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="blog-post__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-card__tag">{tag}</span>
            ))}
          </div>
        )}

        <h1>{post.title}</h1>

        <div className="blog-post__meta">
          <img
            className="blog-card__avatar"
            src={AVATAR_URL}
            alt={post.author}
          />
          <span>By {post.author}</span>
          <span className="blog-card__dot" aria-hidden="true" />
          <time>{post.date}</time>
        </div>

        {/* Dynamic content from blogData */}
        <article className="blog-content">
          {post.content && post.content.length > 0 ? (
            post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))
          ) : (
            <p>Content coming soon.</p>
          )}
        </article>

<button onClick={() => navigate(-1)} className="back-btn">
  ← Back to Blog
</button>
</div>
    </main>
  );
}