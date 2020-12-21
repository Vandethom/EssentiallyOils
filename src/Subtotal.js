import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Sous-total ( { basket?.length } articles ): 
                            <strong>
                                { value }
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            Un cadeau pour cette commande
                        </small>
                    </>
                )}
                decimalScale={ 2 }
                value={ getBasketTotal(basket) }
                displayType={ "text" }
                thousandSeparator={ true }
                prefix={ "€" }
            />

            <button>Valider ma commande</button>
        </div>
    )
}

export default Subtotal
