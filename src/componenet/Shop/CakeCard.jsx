import './Shop.css'

const CakeCard = ({ image, item, title, price }) => (
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
                    Add to cart
                </div>
            </div>
        </div>
    </div>

)
export default CakeCard;