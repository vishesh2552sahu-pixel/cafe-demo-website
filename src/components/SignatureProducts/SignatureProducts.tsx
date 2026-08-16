import { signatureProducts } from '../../data/menuData';
import { buildWhatsAppOrderUrl } from '../../utils/whatsapp';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SignatureProducts.css';

export default function SignatureProducts() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section signature-products" id="favourites">
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <h2>Khalifah Favourites</h2>
          <div className="gold-line" />
          <p>Made for cravings.</p>
        </div>

        <div className="signature-grid">
          {signatureProducts.map((product, index) => (
            <SignatureCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureCard({ product, index }: { product: typeof signatureProducts[0]; index: number }) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      className="signature-card scroll-reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="signature-card-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="400"
          height="400"
        />
      </div>
      <div className="signature-card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="signature-card-footer">
          <span className="signature-price">₹{product.price}</span>
          <a
            className="btn btn-primary btn-sm"
            href={buildWhatsAppOrderUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
