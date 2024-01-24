import './Shop.css'
import React, { useState } from 'react';
import Shop_cart from '../Shopping cart/data'


function CakeCard ({ id,image, item, title, price }) {
    const [data,setData] = useState(Shop_cart);
    function Add_to_cart({id},{image},{title},{price}) {
        const existingItem = data.find((item) => item.id === id);
        if (!existingItem){

            // Update the array based on your logic
            const newData = [...data,{ id, image,  title, price }]
            const qty=1
            
            setData(newData);
            
            Shop_cart.push({ id, image,  title, price ,qty});}
            else{
                alert("This cake is already in the cart")
            }
            console.log({Shop_cart})
          };
   return( 
   <>
    <div className="col-lg-4 col-md-6 col-sm-6">
         <div className="product__item">
             <div className="product__item__pic set-bg">
                 <img src={image} style={{height:'inherit',width:'100%'}}/>
                 <div className="product__label">
                     <span> {item} </span>
                 </div>
             </div>
             <div className="product__item__text">
                 <h6>{title}</h6>
                 <div className="product__item__price">{price}</div>
                 <div className="cart_add">
                    <button onClick={() => Add_to_cart({id},{image},{title},{price})}> Add to cart</button>
                 </div>
                 {console.log({Shop_cart})}
                 {console.log({data})}
             </div>
         </div>
     </div>
 </>)
  
   }
   export  {CakeCard , Shop_cart};
