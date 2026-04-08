import ProductCard from "./ProductCard";
import myImage from "/green.jpg";
export default function Products() {
  return (
    <section className="products">
      <h2>3 DIFFERENT FLAVOURS</h2>

      <div className="card-grid">
        <ProductCard
          title="Mocha Mint Latte"
          image={myImage}
          color="#7ED957"
        />
        <ProductCard
          title="Coco Chillo"
          image={myImage}
          color="#2EC4F1"
        />
        <ProductCard
          title="Hazelnut"
          image={myImage}
          color="#FFB347"
        />
      </div>
    </section>
  );
}