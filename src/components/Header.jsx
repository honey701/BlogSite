import React, { useState, useEffect } from "react";
import { navLinks } from "../data/blogData";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      
      {/* Logo */}
      <a
        href="/"
        className="header-logo"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        Nutra<span>Health</span>
      </a>

      {/* Actions */}
      <div className="header-actions">
        <button className="btn btn--outline">Login</button>

        <button className="btn btn--primary">
          <span className="btn-icon"></span> Sign up
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
          <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
          <span className={`hamburger-line${menuOpen ? " open" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-nav__link${
                link.active ? " mobile-nav__link--active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                navigate(link.href);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}