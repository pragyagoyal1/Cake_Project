import './cart.css';
import './ShoppingCart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Cart_Card from './cart';
import cartData from './data';

function Shopping_cart() {
    
    return (
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="breadcrumb__text">
                                <h2>Shopping cart</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="breadcrumb__links">
                                <a href="./index.html">Home</a>
                                <span>Shopping cart</span>
                            </div>
                        </div>
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
                                        {cartData.map((cake) => (
                                            <Cart_Card key={cake.id} {...cake} />
                                        ))}</Scrollbars>
                                    </div>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <a href="#">Continue Shopping</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <a href="#"><i className="fa fa-spinner"></i> Update cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart__discount">
                                <h3>Discount codes</h3>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div className="cart__total">
                                <h3>Cart total</h3>
                                <ul>
                                    <li>Subtotal <span>$ 169.50</span></li>
                                    <li>Total <span>$ 169.50</span></li>
                                </ul>
                                <a href="#" className="primary-btn">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Shopping_cart;
