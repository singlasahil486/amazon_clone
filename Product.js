import React from "react";
import './Product.css';
import { StarOutlined } from "@ant-design/icons";
import { useStateValue } from "./Stateprovider";
export default function Product({id,title,price,rating,image})
{
    const [{basket},dispatch] = useStateValue();
   
    const addtobasket = () =>{
        //item goes into datalayer
        dispatch({
         type : "ADD_TO_BASKET",
         item : {
            id:id,
            title :title,
            rating : rating,
            price : price,
            image :image,
         },

        });
    };
    return(
<div className="product">
    <div className="p_info">
<p className="ok">
    {title}<br></br>
    <small>$</small>
    
   <strong> {price}</strong>
</p>
    
<div className="p_rate">
    {Array(rating).fill().map((_,i)=>(<p><StarOutlined /></p>))}


</div>
    </div>
<img src={image} alt =""/>
<button onClick={addtobasket}>Buy</button>
</div>


    );
}