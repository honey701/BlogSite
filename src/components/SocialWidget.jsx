import React from "react";
import "./Widget.css";
import "./SocialWidget.css";

const socialLinks = [
  { label: "Facebook", icon: "f", color: "#1877f2", href: "#" },
  { label: "Instagram", icon: "ig", color: "#e1306c", href: "#" },
  { label: "LinkedIn", icon: "in", color: "#0077b5", href: "#" },
  { label: "Twitter / X", icon: "𝕏", color: "#000", href: "#" },
  { label: "Pinterest", icon: "p", color: "#e60023", href: "#" },
  { label: "YouTube", icon: "▶", color: "#ff0000", href: "#" },
];

export default function SocialWidget() {
  return (
    <div className="widget">
      <h3 className="widget__title">Follow Us</h3>
      <div className="social-grid">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            // onClick={() => {
            //     navigate(post.slug);
            //     window.scrollTo({ top: 0, behavior: "smooth" });
            //   }}
            className="social-btn"
            // target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{ "--social-color": s.color }}
          >
            <span className="social-btn__icon">{s.icon}</span>
            <span className="social-btn__label">{s.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
