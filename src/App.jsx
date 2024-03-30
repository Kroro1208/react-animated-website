import "./app.scss";
import Background from "./components/BackImg/Background";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Background type="Services" /></section>
    <section><Services /></section>
    <section id="Portfolio"><Background type="Portfolio" /></section>
    <Portfolio />
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
