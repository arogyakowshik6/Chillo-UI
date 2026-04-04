export default function ProductCard({ title, image, color }) {
  return (
    <div className="card" style={{ background: color }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}