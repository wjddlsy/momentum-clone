import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Clock() {

    const [ currentTime, setCurrentTime ] = useState(moment().format('HH:mm').toString());
    
    useEffect(()=> {
        const timerId = setInterval(()=> setCurrentTime(moment().format('HH:mm').toString(), 1000));
        return () => {
            clearInterval(timerId);
        }
    });

    return (
        <div className="clock center">
            {currentTime}
        </div>
    );
}

export default Clock