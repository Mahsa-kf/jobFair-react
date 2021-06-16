import React, { useState, useEffect, useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const TimeUntil = () => {
    const [time,setTime] = useState({
        days:'0',
        hours:'',
        minutes:'',
        seconds:''
    })

    const renderItem =(time, value) => (
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>
            <div className="countdown_tag">
                {value}
            </div>
        </div>
    )

const getTimeUntil = (deadline) => {
    //the event day- in future
    const time = Date.parse(deadline) - Date.parse(new Date());
    if(time < 0){
        console.log('Date passed')
    }else{
       const seconds = Math.floor((time/1000)%60);
       const minutes = Math.floor((time/1000/60)%60);
       const hours = Math.floor((time/(1000*60*60))%24);
       const days = Math.floor((time/(1000*60*60*24)));

       setTime({
           days,
           hours,
           minutes,
           seconds
       })
    }
    
    //today

    //future - current

}

    useEffect(()=>{
        setInterval(()=> getTimeUntil('Nov, 09, 2021, 08:00:00'),1000)
    },[getTimeUntil])

    return (
        <Slide left>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in:
                </div>
                <div className="countdown_bottom">
                    
                    {renderItem(time.days, 'Days')}
                    {renderItem(time.hours, 'Hs')}
                    {renderItem(time.minutes, 'Min')}
                    {renderItem(time.seconds, 'Sec')}
                </div>
            </div>


        </Slide>
    )
}
export default TimeUntil;