import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    
    const [succeeded, setSucceeded] = useState("");
    const [processing, setProcessing] = useState(null);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generates a special stripe secret which allows to charge a customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)

        }
        getClientSecret();
    }, [basket])

    console.log('The secret is: ', clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        .then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        })
    };

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

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
                        <p>{ user?.email }</p>
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

                            <form onSubmit={ handleSubmit }>
                                <CardElement onChange={ handleChange } />

                                <div className="payment__priceContainer">
                                    <CurrencyFormat
                                            renderText={ (value) =>(
                                                <>
                                                    <h3>
                                                        Total de votre commande: { value }
                                                    </h3>
                                                </>
                                            )}
                                            decimalScale={ 2 }
                                            value={ getBasketTotal(basket)}
                                            displayType={ "text" }
                                            thousandSeparator={ true }
                                            prefix={ "€" }
                                        />
                                    <button disabled={ processing || disabled || succeeded}>
                                        <span>{ processing ? <p>En cours</p> : "Payer maintenant" }</span>
                                    </button>
                                </div>

                                { error && <div>{ error }</div> }
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
