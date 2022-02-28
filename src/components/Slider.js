import React from 'react';
import { Link } from 'react-router-dom';
import SliderAds from 'react-slick';

const Slider = ({ slides }) => {
  const settings1 = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="slider-cont">
      <div className="slider-ads">
        <SliderAds {...settings1}>
          {slides?.map((producto) => (
            <div className="producto" key={producto.id}>
              <Link to={'/product/' + producto.id} className="producto-header" href="/">
                <img alt="ecommerce" className="producto-img" src={producto.image} />
              </Link>
              <div className="producto-textos">
                <div className="producto-categoria">{producto.category.toUpperCase()}</div>
                <Link to={'/product/' + producto.id} className="producto-title">
                  {producto.title}
                </Link>
                <p className="producto-precio">${producto.price}</p>
              </div>
            </div>
          ))}
        </SliderAds>
      </div>
    </div>
  );
};

export default Slider;