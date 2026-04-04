export default function CTA() {
  return (
    <section className="cta">
      <h2>Purchase your desired flavour now</h2>

      <div className="cta-actions">
        <select>
          <option>Mocha Mint Latte</option>
          <option>Coco Chillo</option>
          <option>Hazelnut</option>
        </select>

        <button className="btn">Buy Now</button>
      </div>
    </section>
  );
}