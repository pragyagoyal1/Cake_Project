
import './slider.css';
import React, { useState } from 'react';
import Shop_cart from '../cart/data';
import items1 from '../../images/shop/cart/cart-1.jpg'
import items2 from '../../images/shop/bread/caterpillar.webp'
import items3 from '../../images/gallery/items3.jpg'
import items4 from '../../images/shop/roll/roll1.jpg'
import items5 from '../../images/gallery/items5.jpg'
import items6 from '../../images/shop/donut/donut1.jpg'
import {Cake} from '../Shop/Cake'
function CakeCard({id, image,item, title, price,quantity }) {
  const [data,setData] = useState(Shop_cart);
  function Add_to_cart({id},{image},{title},{price},{quantity}) {
      const existingItem = data.find((item) => item.id === id);
      if (!existingItem){

          // Update the array based on your logic
          const newData = [...data,{ id, image,  title, price,quantity }]
          
          
          setData(newData);
          
          Shop_cart.push({ id, image,  title, price ,quantity});}
          else{
              alert("This cake is already in the cart")
              
          }
          
        };
  return(
  <>
  <div className="col-lg-4 col-md-6 col-sm-6">
         <div className="home__cart__item">
             <div className="home__cart__item__pic set-bg">
             <div className='home__cart__item__pic__img'>'
                 <img src={image} style={{height:'inherit',width:'100%'}}/></div>
                 <div className="home__cart__label">
                     <span> {item} </span>
                 </div>
             </div>
             <div className="home__cart__item__text">
                 <h6>{title}</h6>
                 <div className="home__cart__item__price">{price}</div>
                 <div className="cart_add">
                    <button onClick={() => Add_to_cart({id},{image},{title},{price},{quantity})}> Add to cart</button>
                 </div>
                
             </div>
         </div>
     </div>
</>)
};

const Slider = () => {
  const cakeData = [
    { id: 1, image:items1, item: ' rolls ' ,title: 'Croissants rolls', price: 500, quantity:1},
    { id: 2, image:items2, item: ' rolls ' ,title: 'Sanwichrolls rolls', price: 500, quantity:1 },
    { id: 3, image:items3, item: ' rolls ' ,title: 'Leopard rolls', price: 500, quantity:1 },
    { id: 4, image:items4, item: ' rolls ' ,title: 'multigrain rolls', price: 500, quantity:1 },
    { id: 5, image:items5, item: ' rolls ' ,title: 'bun rolls', price: 500, quantity:1 },
    { id: 6, image:items6, item: ' rolls ' ,title: 'Focaccia rolls', price: 500, quantity:1 },
  ];

  return (<>
    <div className="conatiner-fluid body-bg">
      <div className="conatainer main">
        <div className="row">
          {cakeData.map((cake) => (
            <CakeCard key={cake.id} {...cake} />
          ))}
        </div>
      </div>
    </div>
    
</>  );
};
export default Slider;