import { useState } from 'react';
import { menuCategories } from '../../data/menuData';
import { buildWhatsAppOrderUrl } from '../../utils/whatsapp';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const headerRef = useScrollReveal<HTMLDivElement>();

  const currentCategory = menuCategories.find((c) => c.id === activeCategory) || menuCategories[0];

  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <h2>The Menu</h2>
          <div className="gold-line" />
        </div>

        {/* Category Tabs */}
        <div className="menu-categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              className={`menu-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-items-wrapper" key={activeCategory}>
          <div className="menu-category-header">
            <h3 className="menu-category-title">{currentCategory.name}</h3>
          </div>
          <div className="menu-grid">
            {currentCategory.items.map((item) => (
              <div key={item.name} className="menu-item">
                <div className="menu-item-info">
                  <div className="menu-item-name">{item.name}</div>
                  {item.description && (
                    <div className="menu-item-desc">{item.description}</div>
                  )}
                </div>
                <div className="menu-item-right">
                  <span className="menu-item-price">₹{item.price}</span>
                  <a
                    className="btn btn-primary btn-sm"
                    href={buildWhatsAppOrderUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
