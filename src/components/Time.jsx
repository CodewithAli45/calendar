import React, { useEffect, useState } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    const formatTime = () => {
        const hours = currentTime.getHours().toString().padStart(2, '0') % 12 || 12;
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const second = currentTime.getSeconds().toString().padStart(2, '0');

        const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';

        return `${hours}:${minutes}:${second} - ${ampm}`
    }
    return (
        <div>
            {formatTime()}
        </div>
    );
}

export default Time;
