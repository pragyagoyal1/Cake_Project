import React from 'react';
import '../font.css';
import './Shop.css';
import { Cake } from './Cake'
import { CupCake } from './Cake';
import { Bread } from "./Cake";
import Icon_slider from '../Icon_slider/Icon_slider';
import { Cookies } from './Cake';
import { Donut } from './Cake';
import { Rolls } from './Cake';
const CakePro = () => {
  return (
    <>

      <div className='container'>
        <div className="container-fluid About__Page__Header About_Main_Img text-white" >
          <div className="container-fluid About__Page__Header page-header py-5 mb-5">
            <div className="container py-5">
              <h1 className="display-2 text-white"> Our Products</h1>
            </div>
          </div>
        </div>
        <Icon_slider />
        <Cake />
      </div>
    </>
  )
};
const BreadPro = () => {
  return (
    <>

      <div className='container'>
        <div className="container-fluid About__Page__Header About_Main_Img text-white" >
          <div className="container-fluid About__Page__Header page-header py-5 mb-5">
            <div className="container py-5">
              <h1 className="display-2 text-white"> Our Products</h1>
            </div>
          </div>
        </div>
        <Icon_slider />
        <Bread />
      </div>
    </>
  )
};
const CupCakePro = () => {
  return (
    <>

      <div className='container'>
        <div className="container-fluid About__Page__Header About_Main_Img text-white" >
          <div className="container-fluid About__Page__Header page-header py-5 mb-5">
            <div className="container py-5">
              <h1 className="display-2 text-white"> Our Products</h1>
            </div>
          </div>
        </div>
        <Icon_slider />
        <CupCake />
      </div>
    </>
  )
};
const DonutPro = () => {
  return (
    <>

      <div className='container'>
        <div className="container-fluid About__Page__Header About_Main_Img text-white" >
          <div className="container-fluid About__Page__Header page-header py-5 mb-5">
            <div className="container py-5">
              <h1 className="display-2 text-white"> Our Products</h1>
            </div>
          </div>
        </div>
        <Icon_slider />
        <Donut />
      </div>
    </>
  )
};
const CookiesPro = () => {
  return (
    <>

      <div className='container'>
        <div className="container-fluid About__Page__Header About_Main_Img text-white" >
          <div className="container-fluid About__Page__Header page-header py-5 mb-5">
            <div className="container py-5">
              <h1 className="display-2 text-white"> Our Products</h1>
            </div>
          </div>
        </div>
        <Icon_slider />
        <Cookies />
      </div>
    </>
  )
};
const RollsPro = () => {
  return (
    <>

      <div className='container'>
        <div className="container-fluid About__Page__Header About_Main_Img text-white" >
          <div className="container-fluid About__Page__Header page-header py-5 mb-5">
            <div className="container py-5">
              <h1 className="display-2 text-white"> Our Products</h1>
            </div>
          </div>
        </div>
        <Icon_slider />
        <Rolls />
      </div>
    </>
  )
};
export { CakePro, CupCakePro, BreadPro, DonutPro, CookiesPro, RollsPro };