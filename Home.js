import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import Product from "./Product";
export default function Home(){
return(
<div className="home">
<div className="home_con">

    <img className="home_im" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg" />
 
 <div className="home_prod">
<Product
id= {1}
title="Apple iPhone 11 (128GB) - Yellow"
price = {54000}
rating = {5}
image ="https://m.media-amazon.com/images/I/714Mg+6MoFL._AC_UY327_FMwebp_QL65_.jpg"
></Product>
<Product
id ={2}
title="Apple iPhone 13 Mini (128GB) - Midnight"
price ={64699}
image ="https://m.media-amazon.com/images/I/61KeIxmldLL._AC_UY327_FMwebp_QL65_.jpg"
rating ={4}
></Product>
 </div>
<div className="home_prod">
    <Product
    id ={3}
    title = "Apple iPhone 11 (128GB) - Purpler"
    price ={50000}
    rating ={4}
    image ="https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY327_FMwebp_QL65_.jpg"
   />
    <Product
    id ={4}
    title="Apple iPhone 13 (256 GB) - Green"
    price ={80220}
    rating ={5}
    image ="https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY327_FMwebp_QL65_.jpg"></Product>
    <Product
    id ={7}
    title="Apple iPhone 13 Pro (128GB) - Sierra Blue"
    price ={120000}
    rating={5}
    image="https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY327_FMwebp_QL65_.jpg"></Product>
 </div>
 <div className="home_prod">
    <Product 
    id ={49}
    title="Apple iPhone 12 (64GB) - (Product) RED"
    price = {49000}
    rating ={2}
    image ="https://m.media-amazon.com/images/I/71E5zB1qbIL._AC_UY327_FMwebp_QL65_.jpg"></Product>
    <Product
    id ={989}
    title="Apple iPhone SE (128 GB) - Starlight (3rd Generation)"
    price ={48900}
    rating ={5}
    image ="https://m.media-amazon.com/images/I/61-MT8AQAPL._AC_UY327_FMwebp_QL65_.jpg"></Product>
    </div>
</div>
   
</div>

);

}