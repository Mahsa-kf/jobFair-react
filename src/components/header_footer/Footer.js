import React from 'react';
import { Fade } from 'react-awesome-reveal';

import downtownToronto from '../../resources/images/downtownToronto.jpg'

const Footer = () => {
    return (
        <footer className="background_image" style={{
            background: `url(${downtownToronto})`,
            height: `${window.innerHeight - 20}px`
        }}>
            <div class="footer_background-cover"></div>
            <Fade>
                <div className="font_righteous footer_logo_venue">The venue</div>
                <div className="footer_copyright">The venue 2021 all rights reserved</div>
            </Fade>
        </footer>
    )
}

export default Footer;