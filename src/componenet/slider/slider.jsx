import './slider.css';
import React, { useState } from 'react';
import Shop_cart from '../cart/data';
import items1 from '../../images/shop/product-1.jpg'
import items2 from '../../images/shop/bread/caterpillar.webp'
import items3 from '../../images/shop/CHOCO TRUFFLE CAKE.jpg'
import items4 from '../../images/shop/roll/roll1.jpg'
import items5 from '../../images/shop/Rasmalai Cake.jpg'
import items6 from '../../images/shop/donut/donut1.jpg'

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
    { id: 1, image:items1, item: ' Cup Cake ' ,title: 'Vanila Cup Cake', price: 70, quantity:1},
    { id: 2, image:items2, item: ' Bread ' ,title: 'Italian Bread (1/2 KG)', price: 249, quantity:1 },
    { id: 3, image:items3, item: ' Cake ' ,title: 'Orea Cake(1/2 KG)', price: 450, quantity:1 },
    { id: 4, image:items4, item: ' rolls ' ,title: 'Choco rolls', price: 150, quantity:1 },
    { id: 5, image:items5, item: ' Cake ' ,title: 'Rasmalai Cake(1 KG)', price: 600, quantity:1 },
    { id: 6, image:items6, item: ' Donut ' ,title: 'Kit Kat Donut', price: 60, quantity:1 },
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