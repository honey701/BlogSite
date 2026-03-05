import React from "react";
import "./HeroBanner.css";

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__overlay" />

      <div className="hero-banner__content">
        <span className="hero-banner__eyebrow">
          Unlock Better Health
        </span>

        <h1 className="hero-banner__title">
          The Nutra<em>Health</em> Blog
        </h1>

        <p className="hero-banner__subtitle">
          Real nutrition advice, supplement insights, and healthy lifestyle strategies — curated for a better you.
        </p>

        <div className="hero-banner__badges">
          <span className="hero-badge">⚡ Boost Energy</span>
          <span className="hero-badge">🛡 Strengthen Immunity</span>
          <span className="hero-badge">❤️ Support Wellness</span>
        </div>
      </div>

      <div className="hero-banner__divider" />

      <div className="hero-banner__scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}
