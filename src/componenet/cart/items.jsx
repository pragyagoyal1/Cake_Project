import React, { useContext } from "react";
import { CartContext } from "./Cart";


const Items = ({ id, title, image, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
    <div className="items-info">
    <div className="product-img">
      <img src={image} alt="iamge" />
    </div>

    <div className="title">
      <h2>{title}</h2>
      
    </div>

    <div className="add-minus-quantity">
      <button  onClick={() => increment(id)} >+</button>
      <input type="text" placeholder={quantity} disabled />
      <button onClick={() => decrement(id)} >-</button>
    </div>

    <div className="price">
      <h3>{price*quantity}₹</h3>
    </div>

    <div className="remove-item">
    <button ><i
        className="fas Trash_img "
        onClick={() => removeItem(id)}></i></button>
    </div>
  </div>
  <hr />
</>
  
  )
};

export default Items;

     