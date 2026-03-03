import React from "react";
import { useNavigate } from "react-router-dom";
import { footerData } from "../data/blogData";
import "./Footer.css";

const companyRoutes = {
  "About Us": "/about",
  "CSR Policy": "/csr-policy",
  "Leadership": "/leadership",
  "Certifications": "/certifications",
  "Careers": "/careers",
  "Awards & Recognition": "/awards",
};

function FooterLink({ label }) {
  const navigate = useNavigate();
  const route = companyRoutes[label];

  function handleClick(e) {
    e.preventDefault();
    if (route) {
      navigate(route);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  return (
    <a href={route || "#"} onClick={route ? handleClick : (e) => e.preventDefault()}>
      {label}
    </a>
  );
}

export default function Footer() {
  const navigate = useNavigate();

  function goHome(e) {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">

          {/* Brand col */}
          <div className="footer__brand-col">
            <a href="/" className="footer__logo" onClick={goHome}>
              Nutra<span>Health</span>
            </a>
            <p className="footer__tagline">Passion for Nutrition</p>
            <address className="footer__address">
              Plot no. 5, first floor, khasra no. 127, village dhoolsiras<br />
              tehsil- vasant vihar, new delhi-110077<br />
              <a href="tel:+91997095414">+91-997095414</a><br />
              <a href="mailto:customercare@nutrahealth.com">customercare@nutrahealth.com</a>
            </address>
          </div>

          {/* Company links */}
          <div>
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              {footerData.company.map((l) => (
                <li key={l}>
                  <FooterLink label={l} />
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise links */}
          <div>
            <h4 className="footer__col-title">Our Expertise</h4>
            <ul className="footer__links">
              {footerData.expertise.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Customer Services */}
          <div>
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {footerData.quickLinks.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p>Copyright © 2026 nutrahealth.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}