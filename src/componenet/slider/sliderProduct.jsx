import React from 'react';
import './slider.css';

function Product(props){
    return(
        <>
            <div className=" main_card col-3 col-md-12 col-xl-3 col-lg-3">
                            <div className="card">
                                <img src={'../../images/gallery/${props.PImg}'} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h3 className="card-text">{ props.PName}</h3>
                                        <p className="card-text"> {props.PPrice}</p>
                                    </div>
                            </div>
                        </div>
        </>
    )
}
export default Product;
