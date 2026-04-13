export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-eyebrow">[ Premium Energy Coffee ]</div>

        <h1>
          BOOST
          <em>YOUR</em>
          ENERGY
        </h1>

        <p className="hero-sub">
          Crafted for those who move fast. Three bold coffee
          flavours engineered to fuel your day — naturally.
        </p>

        <div className="hero-ctas">
          <button className="btn">Shop Now</button>
          <button className="btn-outline">See Flavours</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">3</span>
            <span className="stat-label">Flavours</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">120mg</span>
            <span className="stat-label">Caffeine</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">0g</span>
            <span className="stat-label">Sugar</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="can-wrap">
          <div className="can-glow"></div>

          <div className="orbit orbit-1">
            <div className="orbit-dot"></div>
          </div>
          <div className="orbit orbit-2">
            <div className="orbit-dot orbit-dot-olive"></div>
          </div>

          <div className="can">
            <div className="can-scanlines"></div>
            <div className="can-top">
              <div className="can-tab"></div>
            </div>
            <div className="can-band can-band-top"></div>
            <div className="can-label">
              <div className="can-brand">CHILLO</div>
              <div className="can-sub">Energy Coffee</div>
            </div>
            <div className="can-band can-band-bottom"></div>
            <div className="can-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
}