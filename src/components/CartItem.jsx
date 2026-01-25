import React from 'react';
import { FaTrash } from 'react-icons/fa';
import '../pages/Korpa.css'; 

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item-card mb-3 shadow-sm">
      <div className="row g-0 w-100 align-items-center">
        
        {/* Slika */}
        <div className="col-md-3 col-lg-2 col-4">
          <img src={item.fotografija} alt={item.naziv} className="cart-item-img" />
        </div>

        {/* Detalji */}
        <div className="opis-slike col-md-7 col-lg-8 col-6 ps-4 ps-lg-5">
          <h5 className="mb-3 font-serif fw-bold text-dark">{item.naziv}</h5>
          <p className="text-muted mb-0 small">{item.tehnike}</p>
          <p className="text-muted mb-0 small">{item.dimenzije}</p> {/* Hardkodovano ili dodaj u podatke */}
        </div>

        {/* Cena i Brisanje */}
        <div className="kanta-cena col-md-2 col-lg-2 col-2 d-flex flex-column align-items-end h-100">
           <button 
              className="delete-btn " 
              onClick={() => removeFromCart(item.id)}
              title="Ukloni iz korpe"
            >
              <FaTrash size={18} />
           </button>
           <span className="fw-bold text-custom-red fs-5">{item.cena}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;