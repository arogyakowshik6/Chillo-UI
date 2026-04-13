import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import CTA from "./Components/CTA";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <CTA />
      <footer className="footer">
        <span className="footer-logo">CHILLO</span>
        <span className="footer-copy">© 2025 Chillo. All rights reserved.</span>
      </footer>
    </>
  );
}