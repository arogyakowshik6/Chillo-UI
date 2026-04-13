import ProductCard from "./ProductCard";
import mochaImg from "/mocha.svg";
import cocoImg from "/coco.svg";
import hazelnutImg from "/hazelnut.svg";

const flavours = [
  {
    num: "01",
    title: "Mocha Mint Latte",
    image: mochaImg,
    accentColor: "#7a9a28",
    description: "Rich espresso meets cool peppermint. A refreshing hit that keeps you sharp.",
    price: "£3.49",
    badge: "Best Seller",
  },
  {
    num: "02",
    title: "Coco Chillo",
    image: cocoImg,
    accentColor: "#2a8aaa",
    description: "Smooth cold brew with toasted coconut. Tropically energised, dangerously smooth.",
    price: "£3.49",
  },
  {
    num: "03",
    title: "Hazelnut",
    image: hazelnutImg,
    accentColor: "#c49228",
    description: "Velvety hazelnut praline over bold espresso. The classic, perfected.",
    price: "£3.49",
    badge: "New",
  },
];

export default function Products() {
  return (
    <section className="products">
      <div className="section-header">
        <div>
          <p className="section-label">Our Range</p>
          <h2 className="section-title">3 Bold Flavours</h2>
        </div>
        <span className="section-link">View all →</span>
      </div>

      <div className="card-grid">
        {flavours.map((f) => (
          <ProductCard key={f.num} {...f} />
        ))}
      </div>
    </section>
  );
}