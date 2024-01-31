import React from 'react';
import '../font.css';
import {CupCake} from './Cake'
import {Bread} from './Cake'
import Icon_slider from '../Icon_slider/Icon_slider';
import './Shop.css';
import {Cake} from './Cake' 
const Shop = () => {
  return (
    <>
    
    
    <div className="container-fluid About__Page__Header About_Main_Img text-white" >
                <div className="container-fluid About__Page__Header page-header py-5 mb-5">
                    <div className="container py-5">
                        <h1 className="display-2 text-white"> Our Products</h1>
                    </div>
                </div>
            </div>
            <Icon_slider />
            <Cake/>
            <CupCake />
            <Bread />
                          

          
            
        
    </>
  );
}

export default Shop;
