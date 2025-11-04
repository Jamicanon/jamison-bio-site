import React from "react";

export default function About() {
  return (
    <main className="section">
      <div className="container">
        <h1>About Jamison</h1>

        <p>
          I’m an Informatics student at the University of Washington. I’m
          passionate about product design, accessibility, and front-end engineering
          — bridging research, design, and code to build thoughtful web
          experiences. I also shoot portraits and events, and train in Taekwondo.
        </p>

        <h2>Focus areas</h2>
        <ul>
          <li>Product design & UX — research, wireframes, prototyping</li>
          <li>Front-end — HTML, CSS, JavaScript, React, accessible UIs</li>
          <li>Photography — portraits, event coverage, Lightroom editing</li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you’d like to collaborate or see work samples, email:
          <a href="mailto:jamisc@uw.edu">jamisc@uw.edu</a> or view code on
          <a
            href="https://github.com/Jamicanon"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </main>
  );
}