export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">CHILLO</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Our Coffees</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="btn">Order Now</button>
    </nav>
  );
}