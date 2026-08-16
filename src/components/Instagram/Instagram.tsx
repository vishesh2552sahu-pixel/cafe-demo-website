import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../../data/menuData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Instagram.css';

const gridImages = [
  '/images/food/chicken-burger.png',
  '/images/food/chicken-broast.png',
  '/images/food/french-fries.png',
  '/images/food/pizza.png',
];

export default function Instagram() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section instagram-section">
      <div className="container">
        <div className="section-header scroll-reveal" ref={ref}>
          <h2>Follow Khalifah</h2>
          <div className="gold-line" />
          <span className="instagram-handle">{INSTAGRAM_HANDLE}</span>
        </div>

        <div className="instagram-grid">
          {gridImages.map((img, i) => (
            <a
              key={i}
              className="instagram-grid-item"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={img}
                alt={`Khalifah food ${i + 1}`}
                loading="lazy"
                width="200"
                height="200"
              />
            </a>
          ))}
        </div>

        <a
          className="btn btn-secondary instagram-btn"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}
