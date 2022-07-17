import React from "react";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./Stateprovider";
import './Subtotal.css';
export default function Subtotal()
{
    const [{basket}] = useStateValue();
    return(
<div className="subtotal">
<div className="upper">
<h3>Total Sum : </h3>
<h3>{getBasketTotal(basket)}</h3>
</div>
<div className="sub-button">
    <button >Checkout</button>
</div>
</div>

    );
}