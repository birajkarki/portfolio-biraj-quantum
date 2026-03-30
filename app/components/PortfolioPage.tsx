import QuantumCanvas from "@/app/components/QuantumCanvas";
import {
  certifications,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/app/data/portfolio";

const navLinks = [
  { href: "#home", label: "Init" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function PortfolioPage() {
  const featuredProject = projects.find((project) => project.featured);
  const standardProjects = projects.filter((project) => !project.featured);

  return (
    <div className="site-shell">
      <QuantumCanvas />

      <header className="site-header">
        <a href="#home" className="brand">
          BK.dev
        </a>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="header-state">quantum state active</p>
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Full Stack x Quantum Computing</p>
              <h1 className="hero-title">
                <span>Biraj</span>
                <span className="gradient-text">Karki</span>
              </h1>
              <p className="hero-subtitle">{profile.summary}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={profile.ctaPrimary}>
                  View Projects
                </a>
                <a className="button button-ghost" href={profile.ctaSecondary}>
                  Get In Touch
                </a>
              </div>

              <div className="stats-grid">
                {profile.stats.map((item) => (
                  <div key={item.label}>
                    <p className="stat-value">{item.value}</p>
                    <p className="stat-label">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="orbital-wrap" aria-hidden="true">
              <div className="orbital-core">BK</div>
              <div className="orbit orbit-1">
                <span className="electron electron-1" />
              </div>
              <div className="orbit orbit-2">
                <span className="electron electron-2" />
              </div>
              <div className="orbit orbit-3">
                <span className="electron electron-3" />
              </div>
              <p className="orbital-caption">React . Quantum . DevOps</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <p className="section-eyebrow">Superposition of Skills</p>
            <h2 className="section-title">
              Technical <span className="gradient-text">Capabilities</span>
            </h2>
            <div className="cards-grid three-up">
              {skillGroups.map((group) => (
                <article key={group.title} className="card skill-card" data-accent={group.accent}>
                  <h3>{group.title}</h3>
                  <div className="tag-wrap">
                    {group.items.map((item) => (
                      <span key={item} className="tag" data-accent={group.accent}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <p className="section-eyebrow">Wave Function Collapsed</p>
            <h2 className="section-title">
              Work <span className="gradient-text-alt">Experience</span>
            </h2>

            <div className="timeline">
              {experiences.map((item) => (
                <article key={`${item.role}-${item.period}`} className="timeline-item">
                  <span className="timeline-dot" data-accent={item.accent} />
                  <div className="card timeline-card">
                    <div className="timeline-head">
                      <h3>{item.role}</h3>
                      <p>{item.period}</p>
                    </div>
                    <p className="timeline-company">{item.company}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="section-eyebrow">Entangled Systems</p>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>

            <div className="cards-grid projects-grid">
              {featuredProject && (
                <article className="card project-card featured-project">
                  <p className="project-index">01 / FEATURED</p>
                  <h3>{featuredProject.name}</h3>
                  <p>{featuredProject.description}</p>
                  {featuredProject.impact && (
                    <div className="impact-row">
                      {featuredProject.impact.map((item) => (
                        <div key={item.label}>
                          <strong>{item.value}</strong>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="tag-wrap">
                    {featuredProject.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              )}

              {standardProjects.map((project, index) => (
                <article key={project.name} className="card project-card">
                  <p className="project-index">0{index + 2}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.impact && (
                    <div className="impact-row single">
                      {project.impact.map((item) => (
                        <div key={item.label}>
                          <strong>{item.value}</strong>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="tag-wrap">
                    {project.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <p className="section-eyebrow">Quantum State Verified</p>
            <h2 className="section-title">
              Certifications and <span className="gradient-text-alt">Credentials</span>
            </h2>
            <div className="cards-grid three-up">
              {certifications.map((item) => (
                <article key={`${item.title}-${item.date}`} className="card cert-card">
                  <h3>{item.title}</h3>
                  <p className="cert-issuer">{item.issuer}</p>
                  <p className="cert-date">{item.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="section-eyebrow">Collapse the Wavefunction</p>
              <h2 className="section-title">
                Let&apos;s <span className="gradient-text">Connect</span>
              </h2>
              <p className="contact-copy">
                Open to full-stack opportunities and quantum computing collaborations.
              </p>

              <div className="contact-links">
                <a href={profile.links.email}>Email: birajcodes@gmail.com</a>
                <a href={profile.links.phone}>Phone: +977 9845971897</a>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn: linkedin.com/in/biraj-karki
                </a>
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub: github.com/birajkarki
                </a>
              </div>
            </div>

            <aside className="card quantum-panel">
              <p className="panel-title">Current Quantum State</p>
              <p className="state-formula">|psi&gt; = alpha|0&gt; + beta|1&gt;</p>
              <div className="state-bar">
                <span>|0&gt;</span>
                <div>
                  <i style={{ width: "65%" }} />
                </div>
                <strong>65%</strong>
              </div>
              <div className="state-bar">
                <span>|1&gt;</span>
                <div>
                  <i style={{ width: "35%" }} />
                </div>
                <strong>35%</strong>
              </div>
              <ul className="status-list">
                <li>Location: {profile.location}</li>
                <li>Status: Open to opportunities</li>
                <li>Specialization: {profile.title}</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Copyright 2026 {profile.name}</p>
        <p>Always building in superposition</p>
      </footer>
    </div>
  );
}
