import { useInView } from 'react-intersection-observer';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import BottomNavigation from './components/BottomNavigation';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [about, inView] = useInView({
    threshold: 0.1,
  });

  const [portfolio, inView2] = useInView({
    threshold: 0.1,
  });

  const [contact, inView3] = useInView({
    threshold: 0.1,
  });

  const activeTab = () => {
    if (inView && !inView2) {
      return 'about';
    } else if (inView2 && !inView3) {
      return 'portfolio';
    } else if (inView3) {
      return 'contact';
    }
  };

  const executeScroll = (selection) => {
    switch (selection) {
      case 'about':
        return document
          .getElementById('about')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
      case 'portfolio':
        return document
          .getElementById('portfolio')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
      case 'contact':
        return document
          .getElementById('contact')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });
      default:
        window.scrollTo({ top: 0, behavior: 'smooth', block: 'start' });
    }
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  return (
    <div className="bg-white-light w-[100%] flex flex-col items-center overflow-hidden">
      <Header executeScroll={executeScroll} activeTab={activeTab} />

      <Home />

      <div ref={about} id="about">
        <About />
      </div>

      <div
        ref={portfolio}
        id="portfolio"
        className="w-[100%] flex flex-col items-center px-2 py-4 sm:p-8 bg-black-light"
      >
        <Projects />
      </div>

      <div ref={contact} id="contact">
        <Contact />
      </div>

      <Footer executeScroll={executeScroll} />

      <BottomNavigation executeScroll={executeScroll} activeTab={activeTab} />
    </div>
  );
}

export default App;
