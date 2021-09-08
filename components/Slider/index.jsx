import React from 'react';
import Slider from 'react-slick';

import './style.css';

function Slide({children,slidesToShow}) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        autoplay:true,
        arrows: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:slidesToShow-1,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: slidesToShow-2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: slidesToShow-3,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                {children}
            </Slider>
        </>
    );
}

export default Slide;