import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage"><Navbar /></section>
    <section id="Services">BackImage</section>
    <section>Service</section>
    <section>BackImage2</section>
    <section id="Portfolio">Portfolio</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">contact</section>
  </div>;
};

export default App;
