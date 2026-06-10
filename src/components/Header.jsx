import './Header.css';

export default function Header({ categories }) {
  return (
    <header className="header">
      <div className="header-kente" />

      <div className="header-content">
        <div className="header-logo">
          <span className="logo-icon">◈</span>
          <span className="logo-text">NoLimit<span className="logo-accent">Stream</span></span>
        </div>

        <nav className="header-nav">
          {categories.map(cat => (
            <a key={cat.id} href={`#${cat.id}`} className="nav-link">
              <span className="nav-icon">{cat.icon}</span>
              <span className="nav-label">{cat.title.split(' ')[0]}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
