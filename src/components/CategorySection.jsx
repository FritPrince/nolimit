import LinkCard from './LinkCard';
import './CategorySection.css';

export default function CategorySection({ category }) {
  return (
    <section className="category-section reveal" id={category.id}>
      <div className="category-header">
        <div className="category-icon-wrap" style={{ background: `${category.color}18`, borderColor: `${category.color}30` }}>
          <span className="category-icon">{category.icon}</span>
        </div>
        <div>
          <h2 className="category-title" style={{ color: category.color }}>
            {category.title}
          </h2>
          <p className="category-desc">{category.description}</p>
        </div>
        <div className="category-count" style={{ borderColor: `${category.color}40`, color: category.color }}>
          {category.links.length} liens
        </div>
      </div>

      <div className="category-divider" style={{ background: `linear-gradient(90deg, ${category.color}60, transparent)` }} />

      <div className="links-grid">
        {category.links.map((link) => (
          <LinkCard key={link.url} link={link} accentColor={category.color} />
        ))}
      </div>
    </section>
  );
}
