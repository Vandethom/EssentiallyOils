import React from 'react';
import './Order.css';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {

    console.log(order.title)
    return (
        <div className="order">
            <h2>
                Votre commande
            </h2>
            <p>{ moment.unix(order.data.created).format('MMMM Do YYYY, h:mma') }</p>
            <p className="order__id">
                <small>{ order.id }</small>
            </p>
            { order.data.basket?.map(item => (
                <CheckoutProduct
                    id={ order.id }
                    title={ item.title }
                    image={ item.image }
                    price={ item.price }
                    rating={ item.rating }
                    hideButton
                />
            ))}

            <CurrencyFormat
                renderText={ (value) => (
                    <h3 className="order__total">
                        Total des commandes: { value }
                    </h3>
                )}
                decimalScale={ 2 }
                value={ order.data.amount / 100 }
                displayType={ "text" }
                thousandSeparator={ true }
                prefix={ "€" }
            />
        </div>
    )
}

export default Order
