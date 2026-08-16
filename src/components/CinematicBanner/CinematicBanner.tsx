import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CinematicBanner.css';

export default function CinematicBanner() {
  const contentRef = useScrollReveal<HTMLDivElement>();

  const handleExploreMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#menu');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cinematic-banner">
      <div className="cinematic-banner-bg">
        <img
          src="/images/hero-poster.png"
          alt="Cinematic food spread"
          loading="lazy"
        />
      </div>
      <div className="cinematic-banner-overlay" />
      <div className="cinematic-banner-content scroll-reveal-scale" ref={contentRef}>
        <h2>
          Big Cravings.
          <span className="text-gold">Bigger Flavour.</span>
        </h2>
        <a
          className="btn btn-primary"
          href="#menu"
          onClick={handleExploreMenu}
        >
          Explore Menu
        </a>
      </div>
    </section>
  );
}
