import React from 'react';
import "./Checkout.css";
import Banner from './banner.png';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={ Banner } alt="photo d'un article" />

                <div>
                    <h2>
                        Votre panier
                    </h2>

                    { /* BasketItem */ }
                    { /* BasketItem */ }
                    { /* BasketItem */ }
                    { /* BasketItem */ }
                    { /* BasketItem */ }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;