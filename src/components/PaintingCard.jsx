

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlus, BsCartCheck, BsArrowRight } from "react-icons/bs";

const PaintingCard = ({ id,galerija_id,naziv,dimenzije,tehnike,cena,dostupna,fotografija, onAddToCart, isInCart }) => { // Dodali smo isInCart prop ako želimo da proverimo da li je već dodat spolja

  const handleAddToCart = () => {
    
    onAddToCart({ id,galerija_id,naziv,dimenzije,tehnike,cena,dostupna,fotografija,
          //isto kao da pise -> id: id,...
    });
    
  };

  return (
    <div className="painting-card">
      <div className="card-img-wrapper">
        <img src={fotografija} 
             alt={naziv}

              onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/300x400?text=Nema+slike"; // Ili tvoja lokalna placeholder slika
      }} />
      </div>
      
      <div className="card-content">
        <h3 className="painting-title">{naziv}</h3>
        <p className="painting-type">{tehnike}</p>
        
        <div className="card-footer-custom">
          <span className="price">{cena}</span>
          
          <div className="d-flex gap-2">
            {/* Dugme za dodavanje */}
            <button 
              className={`btn-add-cart ${isInCart ? 'added' : ''}`} 
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              {isInCart ? <BsCartCheck size={18} /> : <BsCartPlus size={18} />}
              {isInCart ? "Dodato" : "U korpu"}
            </button>

            {/* Dugme za pregled korpe (Pojavljuje se samo kad je dodato) */}
            {isInCart && (
              <Link to="/korpa" className="btn-view-cart" title="Pregledaj korpu">
                <BsArrowRight size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingCard;