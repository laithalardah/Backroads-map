import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <About/>
      <Services/>
      <Tours/>
      <Footer/>
    </>
  );
}

export default App;
