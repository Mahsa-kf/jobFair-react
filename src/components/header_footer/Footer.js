import React from 'react';
import { Fade } from 'react-awesome-reveal';

import downtownToronto from '../../resources/images/downtownToronto1.jpg'

const Footer = () => {
    return (
        <footer className="background_image footer_image" style={{
            background: `url(${downtownToronto})`,
        }}>
            <div class="footer_background-cover"></div>
            <Fade>
                <div className="font_righteous footer_logo_venue">IT Job Fair Toronto</div>
                <div className="footer_copyright">@Unique Talent 2021 - All rights reserved</div>
            </Fade>
        </footer>
    )
}

export default Footer;