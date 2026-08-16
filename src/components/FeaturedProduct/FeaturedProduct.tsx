import { PHONE_NUMBER } from '../../data/menuData';
import { buildWhatsAppOrderUrl } from '../../utils/whatsapp';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FeaturedProduct.css';

export default function FeaturedProduct() {
  const imageRef = useScrollReveal<HTMLDivElement>();
  const contentRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section featured-product">
      <div className="container">
        <div className="featured-inner">
          <div className="featured-image-wrapper scroll-reveal-left" ref={imageRef}>
            <div className="featured-image-glow" />
            <img
              src="/images/food/chicken-broast.png"
              alt="Chicken Broast"
              loading="lazy"
              width="500"
              height="500"
            />
          </div>
          <div className="featured-content scroll-reveal-right" ref={contentRef}>
            <span className="featured-label">Signature Dish</span>
            <h2 className="featured-title">Chicken Broast</h2>
            <div className="featured-price">₹160</div>
            <p className="featured-desc">
              Golden, crispy, and perfectly seasoned. Our signature chicken broast
              is juicy on the inside, crunchy on the outside — made fresh for
              every order.
            </p>
            <div className="featured-ctas">
              <a
                className="btn btn-primary"
                href={buildWhatsAppOrderUrl('Chicken Broast')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
              <a
                className="btn btn-secondary"
                href={`tel:${PHONE_NUMBER}`}
              >
                Call to Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
