import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhyKhalifah.css';

const features = [
  {
    title: 'Class Taste Every Time',
    description: 'Every bite delivers the premium quality you expect.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Fresh & Crispy',
    description: 'Made fresh for every single order. Never reheated.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Quality You Can Taste',
    description: 'Premium ingredients, bold flavours, no compromise.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Made for Cravings',
    description: 'When the craving hits, Khalifah satisfies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export default function WhyKhalifah() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section why-khalifah">
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <h2>Why Khalifah?</h2>
          <div className="gold-line" />
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <WhyCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      className="why-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="why-icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}
