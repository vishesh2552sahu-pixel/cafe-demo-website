import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CinematicScroll.css';

gsap.registerPlugin(ScrollTrigger);

interface FoodSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const slides: FoodSlide[] = [
  {
    id: 'burger',
    title: 'CHICKEN BURGER',
    subtitle: 'Crispy. Cheesy. Loaded.',
    image: '/images/food/chicken-burger.png',
  },
  {
    id: 'chicken',
    title: 'CRISPY CHICKEN',
    subtitle: 'Golden fried. Perfectly seasoned.',
    image: '/images/food/crispy-chicken.png',
  },
  {
    id: 'fries',
    title: 'LOADED FRIES',
    subtitle: 'Cheesy. Saucy. Irresistible.',
    image: '/images/food/french-fries.png',
  },
  {
    id: 'pizza',
    title: 'PIZZA',
    subtitle: 'Stretchy cheese. Premium toppings.',
    image: '/images/food/pizza.png',
  },
];

export default function CinematicScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const slideElements = gsap.utils.toArray<HTMLElement>('.cinematic-slide');
      const textElements = gsap.utils.toArray<HTMLElement>('.cinematic-text');
      const imageWrappers = gsap.utils.toArray<HTMLElement>('.cinematic-slide-image');
      const totalSlides = slides.length;
      const segmentDuration = 1 / totalSlides;

      // Main pin timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${window.innerHeight * (totalSlides * 1.5 + 1)}`,
          pin: pinRef.current,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const idx = Math.min(
              Math.floor(progress * totalSlides),
              totalSlides - 1
            );
            setActiveIndex(idx);
          },
        },
      });

      slideElements.forEach((slide, i) => {
        const start = i * segmentDuration;
        const fadeIn = start;
        const hold = start + segmentDuration * 0.15;
        const fadeOut = start + segmentDuration * 0.85;

        // Slide opacity
        tl.fromTo(
          slide,
          { opacity: i === 0 ? 1 : 0 },
          {
            opacity: 1,
            duration: segmentDuration * 0.15,
            ease: 'power2.inOut',
          },
          fadeIn
        );

        if (i < totalSlides - 1) {
          tl.to(
            slide,
            {
              opacity: 0,
              duration: segmentDuration * 0.15,
              ease: 'power2.inOut',
            },
            fadeOut
          );
        }

        // Image scale & movement
        if (imageWrappers[i]) {
          tl.fromTo(
            imageWrappers[i],
            {
              scale: i === 0 ? 1 : 0.8,
              rotate: i % 2 === 0 ? -3 : 3,
            },
            {
              scale: 1.05,
              rotate: 0,
              duration: segmentDuration,
              ease: 'power1.inOut',
            },
            start
          );
        }

        // Text animations
        if (textElements[i]) {
          tl.fromTo(
            textElements[i],
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: segmentDuration * 0.2,
              ease: 'power2.out',
            },
            hold
          );

          if (i < totalSlides - 1) {
            tl.to(
              textElements[i],
              {
                opacity: 0,
                y: -20,
                duration: segmentDuration * 0.15,
                ease: 'power2.in',
              },
              fadeOut
            );
          }
        }
      });

      // Add transition blur/scale effects between slides
      for (let i = 0; i < totalSlides - 1; i++) {
        const transitionPoint = (i + 1) * segmentDuration - segmentDuration * 0.15;
        tl.fromTo(
          '.cinematic-transition-overlay',
          { opacity: 0 },
          {
            opacity: 0.6,
            duration: segmentDuration * 0.1,
            ease: 'power2.in',
          },
          transitionPoint
        ).to(
          '.cinematic-transition-overlay',
          {
            opacity: 0,
            duration: segmentDuration * 0.1,
            ease: 'power2.out',
          },
          transitionPoint + segmentDuration * 0.1
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // Reduced motion fallback
  if (prefersReduced) {
    return (
      <section className="cinematic-scroll" id="cinematic">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="cinematic-slide active"
            style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
          >
            <div className="cinematic-slide-image-wrapper">
              <img
                className="cinematic-slide-image"
                src={slide.image}
                alt={slide.title}
                loading="lazy"
              />
            </div>
            <div className="cinematic-text visible" style={{ position: 'relative', bottom: 'auto', marginTop: '2rem' }}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="cinematic-scroll" id="cinematic" ref={containerRef}>
      <div className="cinematic-scroll-pin" ref={pinRef}>
        {/* Vignette */}
        <div className="cinematic-vignette" />

        {/* Transition overlay */}
        <div
          className="cinematic-transition-overlay"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212,168,67,0.15), rgba(10,10,10,0.9))',
          }}
        />

        {/* Food Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`cinematic-slide ${index === 0 ? 'active' : ''}`}
          >
            <div className="cinematic-slide-glow" />
            <div className="cinematic-slide-image-wrapper">
              <img
                className="cinematic-slide-image"
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </div>
        ))}

        {/* Text overlays */}
        {slides.map((slide, index) => (
          <div
            key={`text-${slide.id}`}
            className={`cinematic-text ${index === 0 ? 'visible' : ''}`}
          >
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        ))}

        {/* Progress dots */}
        <div className="cinematic-progress">
          {slides.map((slide, index) => (
            <div
              key={`dot-${slide.id}`}
              className={`cinematic-progress-dot ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
