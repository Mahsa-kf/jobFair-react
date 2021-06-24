import React from 'react';
import EventDescription from './EventDescription';
import EmployersDescription from './EmployersDescription'
import EmployerLogos from './EmployerLogos'

const Highlights = () => {
    return(
        <div className="highlight_wrapper" id="description">
            <EventDescription/>
            <EmployersDescription/>
            <EmployerLogos/>
        </div>
    )
}

export default Highlights;