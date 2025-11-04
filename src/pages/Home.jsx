import React from "react";

const CONTACT_EMAIL = "jamisc@uw.edu";

export default function Home() {
  return (
    <main id="main">
      <section id="about" className="hero section">
        <div className="container hero-grid">
          <div className="hero-text reveal">
            <p className="overline">Hi, I’m Jamison —</p>
            <h1 className="title">Informatics student, designer, and photographer</h1>
            <p className="lede">I blend research-driven product thinking with front-end craft. I build accessible, reliable front-ends, take photos, and practice taekwondo. Currently studying Informatics at the University of Washington.</p>

            <ul className="meta-list">
              <li><strong>Major</strong> Informatics — University of Washington</li>
              <li><strong>Interests</strong> Product design, accessibility, frontend development</li>
              <li><strong>Hobbies</strong> Guitar, model-building, Taekwondo, photography</li>
            </ul>

            <div className="hero-actions">
              <a className="btn-primary" href="/projects">See projects</a>
              <a className="btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>Email me</a>
            </div>
          </div>

          <div className="hero-media reveal">
            <img src="/assets/portrait.jpg" alt="Jamison Canonizado portrait" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section timeline">
        <div className="container">
          <h2 className="section-title reveal">Experience & highlights</h2>

          <div className="cards">
            <article className="card reveal">
              <h3>Public Relations Manager — Husky Taekwondo</h3>
              <p className="muted">2024 — present</p>
              <p>Manage social presence and communications; coordinate photos and event recaps.</p>
            </article>

            <article className="card reveal">
              <h3>NJROTC Drill Team Coach</h3>
              <p className="muted">Sep 2024 — present</p>
              <p>Teach exhibition drill and prepare cadets for competition.</p>
            </article>

            <article className="card reveal">
              <h3>Product Design / Front-end</h3>
              <p className="muted">Case studies & applications</p>
              <p>Focus on UX case studies, front-end implementation, and accessibility improvements.</p>
            </article>

            <article className="card reveal">
              <h3>Education</h3>
              <p className="muted">University of Washington — Informatics</p>
              <p>Curriculum focused on product design, HCI, and front-end development.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section skills">
        <div className="container">
          <h2 className="section-title reveal">Skills</h2>
          <div className="skill-grid">
            <div className="skill reveal">
              <h4>Design</h4>
              <p>Figma, wireframing, prototyping, usability testing</p>
            </div>
            <div className="skill reveal">
              <h4>Front-end</h4>
              <p>HTML5, CSS3, JavaScript, React (basics), responsive layout</p>
            </div>
            <div className="skill reveal">
              <h4>Research</h4>
              <p>User interviews, heuristic evals, accessibility audits</p>
            </div>
            <div className="skill reveal">
              <h4>Photography</h4>
              <p>Portraits, event photography, lightroom basics</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery">
        <div className="container">
          <h2 className="section-title reveal">Featured photos</h2>
          <div className="masonry reveal">
            <figure><img src="/assets/photo1.jpg" alt="Photo 1" loading="lazy" /></figure>
            <figure><img src="/assets/photo2.jpg" alt="Photo 2" loading="lazy" /></figure>
            <figure><img src="/assets/photo3.jpg" alt="Photo 3" loading="lazy" /></figure>
            <figure><img src="/assets/photo4.jpg" alt="Photo 4" loading="lazy" /></figure>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title reveal">Contact</h2>
          <p className="reveal">Interested in collaborating? I’m open to product design & front-end projects.</p>

          <form className="contact-form reveal" action={`mailto:${CONTACT_EMAIL}`} method="get" encType="text/plain">
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
              <a className="btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>Or email me directly</a>
            </div>
          </form>

          <p className="muted small">You can also find me on <a href="https://github.com/Jamicanon" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </section>
    </main>
  );
}