import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Settings } from '@material-ui/icons';

import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'


const Carrousel = () => {

    const setting = {
        dots: false,
        Infinity: true,
        autoplay: true,
        speed: 100
    }

    return (
        <div className="carrousel_wrapper"
            style={{
                //when the application loads, it adjust to the height of the screen.directive to be stretched to the bottom of the window
                height: `${window.innerHeight}px`
            }}>
            <Slider {...Settings}>
                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`
                        }}></div>

                </div>
                <div>
                    <div>
                        <div className="carrousel_image"
                            style={{
                                background: `url(${slide_two})`,
                                height: `${window.innerHeight}px`
                            }}></div>
                    </div>
                </div>
                    <div>
                        <div>
                            <div className="carrousel_image"
                                style={{
                                    background: `url(${slide_three})`,
                                    height: `${window.innerHeight}px`
                                }}></div>
                        </div>
                    </div>                
            </Slider>
          </div>  
    )
}

export default Carrousel;