import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';

import { useStateValue } from './StateProvider';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="Payment">
            <div className="payment__container">
                <h1>
                    Panier (
                        <Link to="/checkout">{ basket?.length }</Link>
                        )
                </h1>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>
                            Adresse de livraison
                        </h3>
                    </div>

                    <div className="payment__address">
                        <p>{ user.email }</p>
                        <p>3 Penny Lane</p>
                        <p>London</p>
                    </div>
                </div>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>
                            Articles dans le panier
                        </h3>
                    </div>

                    <div className="payment__items">
                        { basket.map(item =>
                            <CheckoutProduct
                            id={ item.id }
                            title={ item.title }
                            image={ item.image }
                            price={ item.price }
                            rating={ item.rating }
                            />
                            )}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>
                            Méthode de paiement
                        </h3>
                    </div>

                    <div className="payment__details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
