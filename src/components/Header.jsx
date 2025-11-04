import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CONTACT_EMAIL = "jamisc@uw.edu";
const GITHUB_URL = "https://github.com/Jamicanon";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/">Jamison Canonizado</Link>

        <nav className="nav" aria-label="Primary">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact" className="cta">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href={`mailto:${CONTACT_EMAIL}`} title="Email" className="small-link">{CONTACT_EMAIL}</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener" title="GitHub" className="small-link" style={{marginLeft:12}}>GitHub</a>

          <button
            id="theme-toggle"
            aria-pressed={theme === "dark"}
            aria-label="Toggle theme"
            onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}