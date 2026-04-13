import { useState } from "react";

const FLAVOURS = ["Mocha Mint Latte", "Coco Chillo", "Hazelnut"];
const PRICE = 3.49;

export default function CTA() {
  const [selected, setSelected] = useState("Mocha Mint Latte");
  const [qty, setQty] = useState(1);

  const total = (PRICE * qty).toFixed(2);

  return (
    <section className="cta">
      <div className="cta-inner">
        <h2>
          Pick Your <span>Flavour</span>
        </h2>
        <p className="cta-subtitle">
          Free delivery on orders over £15. Subscribe and save 15%.
        </p>

        <div className="flavour-picker">
          {FLAVOURS.map((f) => (
            <button
              key={f}
              className={`flavour-chip${selected === f ? " active" : ""}`}
              onClick={() => setSelected(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="cta-qty">
          <span className="qty-label">Qty</span>
          <button
            className="qty-btn"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span className="qty-num">{qty}</span>
          <button
            className="qty-btn"
            onClick={() => setQty((q) => Math.min(24, q + 1))}
          >
            +
          </button>
        </div>

        <div className="cta-buy">
          <span className="total-price">£{total}</span>
          <button className="btn-buy">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}