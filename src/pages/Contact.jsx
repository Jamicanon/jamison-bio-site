import React from "react";

const CONTACT_EMAIL = "jamisc@uw.edu";

export default function Contact() {
  return (
    <main className="section contact">
      <div className="container">
        <h1>Contact</h1>
        <form action={`mailto:${CONTACT_EMAIL}`} method="get" encType="text/plain">
          <label>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" required></textarea>
          </label>
          <div className="form-actions">
            <button type="submit" className="btn-primary">Send</button>
            <a className="btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>Or email me</a>
          </div>
        </form>

        <p className="muted small">GitHub: <a href="https://github.com/Jamicanon" target="_blank" rel="noopener noreferrer">Jamicanon</a></p>
      </div>
    </main>
  );
}