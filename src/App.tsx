import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Docks } from "./components/Doks/Docks";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import { Hero } from "./components/Hero/Hero";
import { Header } from "./components/inxdex";
import { Modular } from "./components/Modular/Modular";
import { Quality } from "./components/Quality/Quality";
import { Usage } from "./components/Usage/Usage";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Modular />
      <Usage />
      <Quality />
      <Gallery />
      <Docks />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
