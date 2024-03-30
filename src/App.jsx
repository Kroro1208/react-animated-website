import "./app.scss";
import Background from "./components/BackImg/Background";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Background type="Services" /></section>
    <section><Services /></section>
    <section><Background type="Portfolio" /></section>
    <section id="Portfolio">Portfolio</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">contact</section>
  </div>;
};

export default App;
