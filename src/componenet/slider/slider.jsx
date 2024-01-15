import React from "react";
import './slider.css';
import items1 from '../../images/gallery/items1.jpg'
import items2 from '../../images/gallery/items2.jpg'
import items3 from '../../images/gallery/items3.jpg'
import items4 from '../../images/gallery/items4.jpg'
import items5 from '../../images/gallery/items5.jpg'
import items6 from '../../images/gallery/items6.jpg'
const CakeCard = ({ image, title, price }) => (
  <div className="col main-card">
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-text">{title}</h3>
        <p className="card-text">{`$${price}`}</p>
      </div>
    </div>
  </div>
);

const Slider = () => {
  const cakeData = [
    { id: 1, image: items1, title: 'Cake Name 1', price: 500 },
    { id: 2, image: items2, title: 'Cake Name 2', price: 500 },
    { id: 3, image: items3, title: 'Cake Name 3', price: 500 },
    { id: 4, image: items4, title: 'Cake Name 4', price: 500 },
    { id: 5, image: items5, title: 'Cake Name 5', price: 500 },
    { id: 6, image: items6, title: 'Cake Name 6', price: 500 },
  ];

  return (
    <div className="conatiner-fluid body-bg">
      <div className="conatainer main">
        <div className="row">
          {cakeData.map((cake) => (
            <CakeCard key={cake.id} {...cake} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider;