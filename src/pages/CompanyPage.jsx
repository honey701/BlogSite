import React from "react";
import "./CompanyPage.css";

export default function CompanyPage({ title, sections }) {
  return (
    <div className="company-page">
      {/* Hero */}
      <div className="company-hero">
        <div className="company-hero-overlay" />
        <div className="company-hero-content">
          <h1>{title}</h1>
          <p>Nutra Health Blog • Passion For Nutrition</p>
        </div>
      </div>

      {/* Content */}
      <div className="company-container">
        {sections.map((section, i) => (
          <div key={i} className="company-section">
            {section.heading && <h2>{section.heading}</h2>}
            {section.text && <p>{section.text}</p>}

            {section.list && (
              <ul>
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}