import React ,{useState} from 'react';
import './cart.css';
import Data from './data'


function Cart_Card({ id,image, title, price,quantity }) {
  const [qty, setQty] = useState(quantity);
var total=0;  
  const qtyAdd = () => {
     setQty(qty + 1);
  };
  const qtySub = () => {
    if (qty>1){
    setQty(qty - 1);
    }
    else{
      alert("Item must be in the cart to remove");
    }
 };
 const subTotal=()=>{
  total=total+(price*qty);
  
 }
//  const remove_item=({id,image,title,price}) => {
//   Shop_cart.remove({ id, image,  title, price ,qty});}
 
return(
<>
    <div className="items-info">
    <div className="product-img">
      <img src={image} alt="iamge" />
    </div>

    <div className="title">
      <h2>{title}</h2>
      <p>description</p>
    </div>

    <div className="add-minus-quantity">
      <button onClick={qtyAdd} >+</button>
      <input type="text" placeholder={qty} disabled />
      <button onClick={qtySub} >-</button>
    </div>

    <div className="price">
      <h3>{price*qty}₹</h3>
    </div>

    <div className="remove-item">
    <button ><i
        className="fas Trash_img "
        ></i></button>
    </div>
  </div>
  <hr />
</>
 ) 
}; export {Cart_Card};
// };export default Cart_Card  ;