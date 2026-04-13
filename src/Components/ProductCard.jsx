export default function ProductCard({ title, image, accentColor, description, price, badge, num }) {
  return (
    <div
      className="card"
      data-num={num}
      style={{ "--card-accent": accentColor }}
    >
      {badge && <span className="card-badge">{badge}</span>}

      <div className="card-flavour-num">FLV — {num}</div>

      <div className="card-img-wrap">
        <img src={image} alt={title} />
      </div>

      <div className="card-info">
        <h3>{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="card-footer">
          <span className="card-price">{price}</span>
          <button className="card-btn" aria-label="Add to cart">+</button>
        </div>
      </div>
    </div>
  );
}