import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Sous-total ( 0 articles ): 
                            <strong>
                                0
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            Un cadeau pour cette commande
                        </small>
                    </>
                )}
                decimalScale={ 2 }
                value={ 0 }
                displayType={ "text" }
                thousandSeparator={ true }
                prefix={ "€" }
            />

            <button>Valider ma commande</button>
        </div>
    )
}

export default Subtotal
