import React from 'react';
import Slider from "react-slick";

const EmployerLogos = () => {

    let numberOfLogos = window.innerWidth / 200;

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: numberOfLogos,
    };

    const LogoNames = [
        'bell.ca', 'rbcroyalbank.com', 'bestlifeonline.com', 'aircanada.com', 'smartcentres.com', 'sloc.co.uk', 'cibc.com', 'friendlyfuture.com','humber.ca',
        'rogers.com','sunlife.ca','adidas-group.com','manulife.com','airbnb.com', 'adp.com', 'fedex.com', 'thegatewaypundit.com', 'hbo.com', 'ksl.com', 'lowes.com',
        'pcmag.com', 'puma.com', 
    ];

    return(
        <div className="carrousel_wrapper">
            <Slider {...settings}>
                {LogoNames.map((logoName, index)=> 
                    <div>
                        <img className="company-logo" key={index} src={`//logo.clearbit.com/${logoName}`} alt={logoName}/>
                    </div>
                )}
            </Slider>

        </div>
    )
}

export default EmployerLogos;