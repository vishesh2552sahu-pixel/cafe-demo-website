import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const imagesRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-content scroll-reveal-left" ref={contentRef}>
            <h2>Class to Cuisine</h2>
            <p>
              At Khalifah, we believe great food doesn't need a complicated story —
              it just needs to taste incredible. Every chicken burger is made with
              crispy, juicy chicken and melted cheese. Every batch of fries is
              golden and fresh. Every pizza is loaded with premium toppings.
            </p>
            <p>
              From our signature Chicken Broast to our loaded Blaggers, every item
              on our menu is crafted to satisfy your biggest cravings. We focus on
              bold flavours, quality ingredients, and portions that leave you full
              and happy.
            </p>
            <p>
              This isn't just food. This is Khalifah — class in every bite.
            </p>
          </div>
          <div className="about-images scroll-reveal-right" ref={imagesRef}>
            <img
              src="/images/food/chicken-burger.png"
              alt="Chicken burger"
              loading="lazy"
              width="300"
              height="300"
            />
            <img
              src="/images/food/chicken-broast.png"
              alt="Chicken broast"
              loading="lazy"
              width="300"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
