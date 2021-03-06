import React from 'react';
import { Zoom } from 'react-awesome-reveal';


import icon_calendar from '../../resources/images/icons/calendar.png';

import icon_location from '../../resources/images/icons/location.png';


const EventInfo = () => {
    return(
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="info_wrapper">

                    <Zoom className = "info_item">
                        <div>
                               <div className="info_outer">
                                   <div className="info_inner">
                                       <div className="info_icon_square bck_red"></div>
                                            <div className="info_icon"
                                                style={{background:`url(${icon_calendar})`}}>
                                        </div>
                                        <div className="info_title">
                                            Event Date & Time
                                        </div>
                                        <div className="info_desc">
                                        Nov 09, 2021  
                                        </div>
                                   </div>

                               </div>
                        </div>
                    </Zoom>

                    <Zoom className = "info_item info_item_2">
                        <div>
                               <div className="info_outer">
                                   <div className="info_inner">
                                        <a className="info_icon_square bck_yellow" href="#map"></a>
                                        <a  href="#location" className="info_icon"
                                            style={{ background: `url(${icon_location})` }}>
                                        </a>
                                        <div className="info_title">
                                            Event Location
                                        </div>
                                        <div className="info_desc">
                                            5500 Yonge Street
                                        </div>
                                   </div>

                               </div>
                        </div>
                    </Zoom>                        
                </div>
            </div>

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.445149682691!2d-79.41834078449801!3d43.78437527911689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d0f99b6bd6d%3A0xd66c47f4df2b159f!2s5793%20Yonge%20St%2C%20North%20York%2C%20ON%20M2M%200A9!5e0!3m2!1sen!2sca!4v1623247322105!5m2!1sen!2sca" 
            width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>         */}
        </div>
    )
}

export default EventInfo;