import { SparkleIcon, TvIcon, FilmIcon, SportIcon, GiftIcon, DeviceIcon } from './Icons';
import './Header.css';

const iconMap = {
  '🆕': SparkleIcon,
  '📺': TvIcon,
  '🎬': FilmIcon,
  '⚽': SportIcon,
  '🎁': GiftIcon,
  '📱': DeviceIcon,
};

const navLabelMap = {
  'android-tv': 'Android-TV',
};

export default function Header({ categories }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <div className="logo-mark" />
          <span className="logo-text">NoLimit<span className="logo-accent">Stream</span></span>
        </div>

        <nav className="header-nav">
          {categories.map(cat => {
            const Icon = iconMap[cat.icon] || SparkleIcon;
            return (
              <a key={cat.id} href={`#${cat.id}`} className="nav-link">
                <Icon size={16} />
                <span className="nav-label">{navLabelMap[cat.id] || cat.title.split(' ')[0]}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
