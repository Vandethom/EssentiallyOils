import React from 'react';
import "./Checkout.css";
import Banner from './banner.png';
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src={ Banner } alt="photo d'un article" />

                <div>
                    <h3>
                        Bonjour { user?.email }
                    </h3>
                    <h2 className="checkout__title">
                        Votre panier
                    </h2>

                    { basket.map(item => (
                        <CheckoutProduct
                            id={ item.id }
                            title={ item.title }
                            image={ item.image }
                            price={ item.price }
                            rating={ item.rating }
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;