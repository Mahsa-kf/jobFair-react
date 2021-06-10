import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Settings } from '@material-ui/icons';

import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'


const Carrousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

    };

    return (
        <div className="carrousel_wrapper"
            style={{
                //when the application loads, it adjust to the height of the screen.directive to be stretched to the bottom of the window
                height: `${window.innerHeight}px`
            }}>


            <Slider {...settings}>
                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`
                        }}>

                    </div>

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
                {/* <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div> */}
            </Slider>


            {/* <Slider {...settings}>

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
            </Slider> */}
        </div>
    )
}

export default Carrousel;