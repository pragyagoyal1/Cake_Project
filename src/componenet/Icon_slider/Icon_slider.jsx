import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Icon_slider.css';
import '../flaticon.css'
import { useNavigate } from 'react-router-dom';

const Icon_slider = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  // Customize settings as per your requirements
  const settings = {
    infinite: true,
    speed: 2,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const carouselData = [
    { id: 1, content: <span className="flaticon-034-chocolate-roll"></span>, name: "Choco-roll", pro: "/RollsPro" },
    { id: 2, content: <span className="flaticon-029-cupcake-3"></span>, name: "Cupcake", pro: "/CupCakePro" },
    { id: 3, content: <span className="flaticon-043-cake-7"></span>, name: "Cakes", pro: "/CakePro" },
    { id: 3, content: <span className="flaticon-042-candies"></span>, name: "Cookies", pro: "/CookiesPro" },
    { id: 4, content: <span className="flaticon-023-doughnut"></span>, name: "Donut", pro: "/DonutPro" },
    { id: 5, content: <span className="flaticon-002-cake-14"></span>, name: "bread", pro: "/BreadPro" },
    // Add more slides as needed
  ];
  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>


      <div className="container">
        <div className="categories">
          <div className="row">
            <div className="categories__slider owl-carousel">

              <Slider ref={sliderRef} {...settings}>
                {carouselData.map((item) => (
                  <div key={item.id}>
                    <div className="categories__item col-2">
                      <div className="categories__item__icon" onClick={() => navigate(item.pro)}>
                        {item.content}
                        <h4>{item.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Icon_slider;
