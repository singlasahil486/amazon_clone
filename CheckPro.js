import React from "react";
import './Check-pro.css';
import { useStateValue } from "./Stateprovider";
export default function Checpro({image,price,title,id}){
    const [{basket},dispatch] = useStateValue();

    const removefrom =() =>{
        dispatch({

            type :'REMOVE',
             id :id,
        })

    };
   
   
    return(

        <div className="c-pro">
             <img className="c-im" src = {image} />
             <div className="c-des">

           <p>{title}</p>
           <p>
            <small>$</small>
            <strong> {price}</strong>

           </p>
              <div className="c-button">
                <button className="ch-but" onClick={removefrom}>
                    remove the item
                </button>
              </div>

             </div>



        </div>
    );
}