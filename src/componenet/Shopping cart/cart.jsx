import './cart.css';
import './ShoppingCart.css';


const Cart_Card = ({ image, title, price, qty}) => (
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
      <button >+</button>
      <input type="text" placeholder={qty} disabled />
      <button >-</button>
    </div>

    <div className="price">
      <h3>{price}₹</h3>
    </div>

    <div className="remove-item">
    <button><i
        className="fas fa-trash-alt remove"
        ></i></button>
    </div>
  </div>
  <hr />
</>
  
);export default Cart_Card;