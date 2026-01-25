

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { FiShoppingBag, FiGift } from "react-icons/fi"; // Nova ikona za praznu korpu i poklon
import CartItem from '../components/CartItem';
import './Korpa.css';
import MemberBanner from '../components/MemberBanner';

const Korpa = ({ cartItems, removeFromCart, isAuth, onRegister,onPlaceOrder }) => {

  // Helper funkcija za konverziju cene
  const parsePrice = (priceStr) => {
    const cleanStr = priceStr
                    .split('')
                    .filter((char)=> (char>='0' && char<='9') || char==='.')
                    .join('');
    return cleanStr !== '' ? parseFloat(cleanStr) : 0;
  };

  // Računanje ukupne cene
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className='pozadina'>
    <div className="container py-5" style={{ minHeight: '80vh' }}>
      
      {/* Header: Prikazuje se samo ako IMA artikala, da ne smeta praznom stanju */}
      {cartItems.length > 0 && (
          <div className="row mb-5 align-items-center position-relative">
            <div className="col-3">
                <Link to="/galerija/" className="btn-back-gallery">
                    <FaArrowLeft /> 
                    <span className='ostatak-ponude'>Ostatak ponude</span>
                </Link>
            </div>
            <div className="col-6 text-center">
                <h2 className="display-5 font-serif mb-0 d-flex align-items-center justify-content-center gap-3">
                    Odabrane slike 
                    {/* <FaShoppingCart className="text-custom-gold" /> */}
                </h2>
            </div>
            <div className="col-3"></div>
          </div>
      )}

      {/* --- LOGIKA PRIKAZA --- */}
      {cartItems.length === 0 ? (
        
        // --- PRAZNA KORPA DIZAJN ---
        <div className="empty-cart-container text-center">
            <div className="empty-cart-icon-wrapper">
                <FiShoppingBag size={50} className="empty-cart-icon" />
            </div>
            
            <h2 className="empty-cart-title">Your Cart is Empty</h2>
            
            <p className="empty-cart-text">
                Discover beautiful original paintings in our gallery and add your favorites to the cart.
                Each piece is unique and waiting for the perfect home.
            </p>
            
            <Link to="/galerija" className="btn-explore-gallery shadow-sm">
                Explore Gallery
            </Link>
        </div>

      ) : (
        // --- PUNA KORPA DIZAJN ---
        <div className="row g-5">
          {/* Lista artikala  col-lg-8 */}
          <div className="">
            {cartItems.map((item) => (
              <CartItem
                key={item.id} 
                item={item} 
                removeFromCart={removeFromCart} 
              />
            ))}
          </div>

          {/* Order Summary col-lg-4*/}
          <div className="">
            <div className="order-summary-card shadow-sm" style={{ top: '100px', maxWidth: '350px', margin: '0 auto' }}>
                <h4 className="font-serif mb-4 border-bottom pb-2">Order Summary</h4>
                
                <div className="d-flex justify-content-between mb-3 text-muted">
                    <span>Subtotal</span>
                    <span>€{totalPrice}</span>
                </div>
                <div className="d-flex justify-content-between mb-4 text-success">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                
                <div className="d-flex justify-content-between mb-4 fw-bold fs-4 border-top pt-3">
                    <span>Total</span>
                    <span>€{totalPrice}</span>
                </div>

                <button 
                className="btn btn-dark w-100 py-3 rounded-3 text-uppercase fw-bold" style={{backgroundColor: '#6c1818', border: 'none'}}
                onClick={onPlaceOrder}
                >
                    Checkout
                </button>
            </div>
          </div>
        </div>
      )}

      {/* MEMBER BANNER */}
      {/* Prikazuje se uvek na dnu stranice, bez obzira da li je korpa puna ili prazna */}
      <div className="member-banner-cart py-5 px-4 mt-5">
        {/* <div className="container-fluid"> */}
            
            <MemberBanner
            onRegister={onRegister}
            isAuth={isAuth}
            />
        {/* </div> */}
      </div>

    </div>
    </div>
  );
};

export default Korpa;