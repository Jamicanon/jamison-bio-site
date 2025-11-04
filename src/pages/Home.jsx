import React from "react";

const CONTACT_EMAIL = "jamisc@uw.edu";
const LINKEDIN_URL = "https://www.linkedin.com/in/jamicanonizado/";
const GITHUB_URL = "https://github.com/Jamicanon";
const KODELY_URL = "https://kodely.example.com";

const EXPERIENCES = [
	{
		title: "Lead — Kodely",
		date: "Oct 2025 — Present",
		desc:
			"Leading hands-on, movement-based enrichment workshops that blend STEM, creativity, and physical activity to foster 21st-century skills. Facilitate after-school, Saturday, and summer programs; deliver turnkey K–8 experiences focused on design thinking, wellness, and real-world problem-solving using Kodely’s curriculum.",
	},
	{
		title: "Undergraduate Teaching Assistant — INFO 463",
		date: "Oct 2025 — Present",
		desc:
			"Supported instruction for a 100+ student upper-division Informatics class focused on user input, interaction design, and interface development. Conducted weekly lab sessions and held office hours for assignment help, design critiques, and technical guidance.",
	},
	{
		title: "Dining Student Assistant — University of Washington Housing & Food Services",
		date: "Jan 2025 — Oct 2025",
		desc:
			"Delivered excellent customer service, processed high-volume POS transactions (30+ per hour) with 99% accuracy, and supported kitchen operations including prep, plating, packaging, inventory management, and restocking.",
	},
	{
		title: "Vice President — Husky Taekwondo",
		date: "2025 — present",
		desc:
			"Lead club strategy and operations; coordinate teams, events, and communications; mentor officers and volunteers.",
	},
	{
		title: "Public Relations Manager — Husky Taekwondo",
		date: "2024 — 2025",
		desc:
			"Managed social presence and communications; coordinated photography and event recaps; designed promotional assets and timelines.",
	},
	{
		title: "NJROTC Drill Team Coach",
		date: "Sep 2024 — present",
		desc:
			"Coach exhibition drill, develop routines, and prepare cadets for local competitions; oversee practice planning and rehearsals.",
	},
	{
		title: "Freelance Photographer",
		date: "2022 — present",
		desc:
			"Event and portrait work — planning shoots, post-processing in Lightroom, client delivery and rights management.",
	},
	{
		title: "Product Design / Front‑end — applications & case studies",
		date: "Ongoing",
		desc:
			"Working on UX case studies that combine research, accessible interaction design, and front-end implementations.",
	},
	{
		title: "Education",
		date: "University of Washington — Informatics",
		desc:
			"Focused on HCI, product design, accessibility, and front-end development.",
	},
];

const SKILLS = [
	{
		heading: "Design",
		items:
			"Figma, wireframing, prototyping, usability testing, accessibility-first design",
	},
	{
		heading: "Front‑end",
		items:
			"HTML5, CSS3, Responsive layout, JavaScript, React, component-driven UI, basic TypeScript",
	},
	{
		heading: "Research",
		items:
			"User interviews, heuristic evaluations, accessibility audits, synthesis & journey mapping",
	},
	{
		heading: "Photography",
		items:
			"Portraits, event coverage, Lightroom editing, composition & lighting",
	},
	{
		heading: "Tools",
		items:
			"VS Code, Git & GitHub, Chrome DevTools, Figma, Adobe Lightroom",
	},
	{
		heading: "Soft skills",
		items:
			"Collaboration, written & visual communication, project planning, mentoring",
	},
];

export default function Home() {
	return (
		<main id="main">
			<section id="about" className="hero section">
				<div className="container hero-grid">
					<div className="hero-text reveal">
						<p className="overline">Hi, I’m Jamison —</p>
						<h1 className="title">
							Informatics student, designer, and photographer
						</h1>
						<p className="lede">
							I blend research-driven product thinking with front-end craft. I
							build accessible, reliable front-ends, take photos, and practice
							taekwondo. Currently studying Informatics at the University of
							Washington.
						</p>

						<ul className="meta-list">
							<li>
								<strong>Major</strong> Informatics — University of Washington
							</li>
							<li>
								<strong>Interests</strong> Product design, accessibility,
								frontend development
							</li>
							<li>
								<strong>Hobbies</strong> Guitar, model-building, Taekwondo,
								photography
							</li>
						</ul>

						<div className="hero-actions">
							<a className="btn-primary" href="/projects">
								See projects
							</a>
							<a className="btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>
								Email me
							</a>
						</div>
					</div>

					<div className="hero-media reveal">
						<img
							src="/assets/photo5.jpg"
							alt="Jamison Canonizado portrait"
							loading="lazy"
						/>
					</div>
				</div>
			</section>

			<section className="section timeline">
				<div className="container">
					<h2 className="section-title reveal">Experience & highlights</h2>

					<div className="cards">
						{EXPERIENCES.map((exp) => (
							<article className="card reveal" key={exp.title}>
								<h3>{exp.title}</h3>
								<p className="muted">{exp.date}</p>
								<p>{exp.desc}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="section skills">
				<div className="container">
					<h2 className="section-title reveal">Skills</h2>
					<div className="skill-grid">
						{SKILLS.map((s) => (
							<div className="skill reveal" key={s.heading}>
								<h4>{s.heading}</h4>
								<p>{s.items}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="section gallery">
				<div className="container">
					<h2 className="section-title reveal">Featured photos</h2>
					<div className="masonry reveal">
						<figure>
							<img src="/assets/photo1.jpg" alt="Photo 1" loading="lazy" />
						</figure>
						<figure>
							<img src="/assets/photo2.jpg" alt="Photo 2" loading="lazy" />
						</figure>
						<figure>
							<img src="/assets/photo3.jpg" alt="Photo 3" loading="lazy" />
						</figure>
						<figure>
							<img src="/assets/photo4.jpg" alt="Photo 4" loading="lazy" />
						</figure>
						<figure>
							<img
								src="/assets/photo5.jpg"
								alt="Jamison smiling under cherry blossoms"
								loading="lazy"
							/>
						</figure>
					</div>
				</div>
			</section>

			<section id="contact" className="section contact">
				<div className="container">
					<h2 className="section-title reveal">Contact</h2>
					<p className="reveal">
						Interested in collaborating? I’m open to product design & front-end
						projects.
					</p>

					<form
						className="contact-form reveal"
						action={`mailto:${CONTACT_EMAIL}`}
						method="get"
						encType="text/plain"
					>
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
							<button type="submit" className="btn-primary">
								Send
							</button>
							<a className="btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>
								Or email me directly
							</a>
						</div>
					</form>

					<p className="muted small">
						You can also find me on{" "}
						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>{" "}
						·{" "}
						<a
							href={GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>{" "}
						·{" "}
						<a
							href={KODELY_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							Kodely
						</a>
					</p>
				</div>
			</section>
		</main>
	);
}