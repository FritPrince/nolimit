import './Hero.css';

export default function Hero({ totalLinks }) {
  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb--1" />
        <div className="hero-orb hero-orb--2" />
        <div className="hero-orb hero-orb--3" />
        <div className="hero-pattern" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Portail Streaming Premium
        </div>

        <h1 className="hero-title">
          Ton univers<br />
          <span className="hero-title-accent">illimité</span> t'attend
        </h1>

        <p className="hero-subtitle">
          Films, séries, sport et TV en direct — tout ce dont tu as besoin,<br />
          classé et prêt à l'emploi. Zéro inscription.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-value">{totalLinks}+</span>
            <span className="stat-label">Sites de streaming</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-value">4</span>
            <span className="stat-label">Catégories</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="stat-value">100%</span>
            <span className="stat-label">Sans inscription</span>
          </div>
        </div>

        <a href="#live-tv" className="hero-cta">
          Explorer le catalogue
          <span className="hero-cta-arrow">↓</span>
        </a>
      </div>

      <div className="hero-adinkra">
        <div className="adinkra-sym">✦</div>
        <div className="adinkra-sym">◈</div>
        <div className="adinkra-sym">✦</div>
      </div>
    </div>
  );
}
