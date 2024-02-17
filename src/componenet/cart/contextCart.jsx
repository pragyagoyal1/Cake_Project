import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./items";
import { CartContext } from "./Cart";


const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  const navigate =useNavigate();
  const submit =()=>{
  navigate("/CheckOut",{state:{totalAmount,totalItem}})
  }
  return (
    <>
      
           <div className="container-fluid About__Page__Header About_Main_Img text-white" >
                <div className="container-fluid About__Page__Header page-header py-5 mb-5">
                    <div className="container py-5">
                        <h1 className="display-2 text-white">Shopping Cart</h1>
                    </div>
                </div>
            </div>
            
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <div className='container-fluid'>
                                    <div className='shopping__cart__table__head'>
                                        <div className='row table__head'>
                                            <div className='col-6 heading' >Product</div>
                                            <div className='col-3 heading' >Quantity</div>
                                            <div className='col-3 heading' >Total</div>
                                        </div>
                                        </div>
                                    <div className='container-fluid Scrollbar_box'>
                                    <Scrollbars>
                                        {item.map((cake) => (
                                            <Items key={cake.id} {...cake}/>
                                        ))}</Scrollbars>
                                    </div>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <a className="continue__btn"  onClick={() => navigate("/Shop")}>Continue Shopping</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <a onClick={clearCart}> clear cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        
                            <div className="cart__total">
                                <h3>Cart total</h3>
                                <ul>
                                    <li>Total Items <span>{totalItem}</span></li>
                                    <li>Total <span>{totalAmount}₹</span></li>
                                </ul>
                                <a href="#" className="primary-btn" onClick={submit}>Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
  );
};

export default ContextCart;