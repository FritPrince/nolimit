import './LinkCard.css';

export default function LinkCard({ link, accentColor }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-card ${link.top ? 'link-card--top' : ''}`}
      style={{ '--accent': accentColor }}
    >
      {link.top && <div className="top-glow" style={{ background: accentColor }} />}

      <div className="link-card-inner">
        <div className="link-card-top-row">
          <span className="link-badge" style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}12` }}>
            {link.badge}
          </span>
          <span className="link-arrow">↗</span>
        </div>

        <h3 className="link-name">{link.name}</h3>
        <p className="link-desc">{link.description}</p>

        <div className="link-url">
          {link.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}
        </div>
      </div>
    </a>
  );
}
