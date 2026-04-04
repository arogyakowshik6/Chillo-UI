import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section className="products">
      <h2>3 DIFFERENT FLAVOURS</h2>

      <div className="card-grid">
        <ProductCard
          title="Mocha Mint Latte"
          image="Chillo-UI\public\green.jpg"
          color="#7ED957"
        />
        <ProductCard
          title="Coco Chillo"
          image="Chillo-UI\public\blue.jpg"
          color="#2EC4F1"
        />
        <ProductCard
          title="Hazelnut"
          image="Chillo-UI\public\orange.jpg"
          color="#FFB347"
        />
      </div>
    </section>
  );
}