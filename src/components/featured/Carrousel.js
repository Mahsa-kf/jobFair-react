import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/JobFair1.jpg'
import slide_two from '../../resources/images/JobFair2.jpg'
import slide_three from '../../resources/images/slideResume2.jpg'

const Carrousel = () => {

    const settings = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed: 1000,
        autoplaySpeed: 2000
    };

    return(
        <div className="carrousel_wrapper"
            style={{
                //when the application loads, it adjust to the height of the screen.directive to be stretched to the bottom of the window
                height:`${window.innerHeight - 10}px`
            }}
        >
            <Slider {...settings}>
                <div>
                    <div className="background_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight - 10}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div className="background_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight - 10}px`
                        }}
                    ></div>
                </div>
                <div>
                    <div className="background_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight - 10}px`
                        }}
                    ></div>
                </div>
            </Slider>

        </div>
    )
}

export default Carrousel;