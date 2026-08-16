import { GOOGLE_MAPS_URL } from '../../data/menuData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Location.css';

export default function Location() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section location-section" id="location">
      <div className="container">
        <div className="section-header scroll-reveal" ref={ref}>
          <h2>Find Khalifah</h2>
          <div className="gold-line" />
        </div>

        <div className="location-card scroll-reveal" ref={ref}>
          <div className="location-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3>Khalifah</h3>
          <p className="location-city">Bhopal</p>
          <a
            className="btn btn-primary"
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
