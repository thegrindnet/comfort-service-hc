import About from "../About/About.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Highlights from "../Highlights/Highlights.jsx";
import Services from "../Services/Services.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import "./App.css";

function App() {
  return (
    <div className="site">
      <a className="site__skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main className="site__main" id="main-content">
        <Hero />
        <Highlights />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
