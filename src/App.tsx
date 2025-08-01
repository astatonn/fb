import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { SuccessCases } from "./components/SuccessCases";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SuccessCases />
      <Team />
      <Testimonials />
      <Cta />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
