import Works from './works';
import About from './about';
import Things from './things';
import Founder from './founder';
import Slider from './slider';
import Contact from './contact';
import Hero from './hero';

const Home = () => {
  return (
    <main className="flex-1 relative">
      <Hero />
      <Works />
      <About />
      <Things />
      <Founder />
      <Slider />
      <Contact />
    </main>
  );
};

export default Home;
