import React from 'react';
import EventDescription from './EventDescription';
import EmployersDescription from './EmployersDescription'

const Highlights = () => {
    return(
        <div className="highlight_wrapper">
            <EventDescription/>
            <EmployersDescription/>
        </div>
    )
}

export default Highlights;