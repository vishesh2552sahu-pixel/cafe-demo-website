import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CinematicScroll from './components/CinematicScroll/CinematicScroll';
import SignatureProducts from './components/SignatureProducts/SignatureProducts';
import Menu from './components/Menu/Menu';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import WhyKhalifah from './components/WhyKhalifah/WhyKhalifah';
import CinematicBanner from './components/CinematicBanner/CinematicBanner';
import About from './components/About/About';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Instagram from './components/Instagram/Instagram';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CinematicScroll />
        <SignatureProducts />
        <Menu />
        <FeaturedProduct />
        <WhyKhalifah />
        <CinematicBanner />
        <About />
        <Location />
        <Contact />
        <Instagram />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
