import React, { useState } from "react";
import "./Widget.css";
import "./NewsletterWidget.css";

export default function NewsletterWidget() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success | error

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <div className="widget">
      <h3 className="widget__title">Newsletter</h3>
      <p className="widget__desc">
        Don't miss our latest posts and special offers. Subscribe for free
        updates!
      </p>

      {status === "success" ? (
        <div className="newsletter__success">
          <span className="newsletter__success-icon">🎉</span>
          <p>Thank you for subscribing!</p>
        </div>
      ) : (
        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <input
            className={`newsletter__input${status === "error" ? " newsletter__input--error" : ""}`}
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            aria-label="Email address"
          />
          {status === "error" && (
            <span className="newsletter__error">Please enter a valid email.</span>
          )}
          <button className="newsletter__btn" type="submit">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
