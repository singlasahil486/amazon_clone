import React from "react";
import './checkout.css';
import { getBasketTotal } from "./reducer";
import { Stateprovider, useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";
import Checkpro from "./CheckPro";
export default function Checkout()
{
        const [{basket}] = useStateValue();
    return(

        <div className="check">
            <div className="left">
                <img  className ="check_im"src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PC/Saitech/July/Category_Banner_1500_x_300.jpg"/>
                 
           <div className="left_ch">       
                 <h2>Your Shopping basket</h2> </div>
                 <div className="ch-items">
                    {basket.map(item =>(
                    <Checkpro
                    
                    id = {item.id}
                    image = {item.image}
                    title ={item.title}
                    price ={item.price}
                    />
                    ))};
                 </div>
            </div>
<div className="right">
<h2>
   
    <Subtotal/>
   
</h2>
</div>
        </div>
    );
}