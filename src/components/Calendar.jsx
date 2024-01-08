import React, { useState } from 'react';
import './style.css';
import Time from './Time';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for(let i = currentYear - 10; i <= currentYear + 10; i++){
            years.push(i);
        }
        return years;
    }
    const weekdays = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const currentMonth = currentDate.getMonth();
    const startDay = new Date(currentDate.getFullYear(), currentMonth, 1).getDay();



    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    const handleMonthChange = (e) => {
        setCurrentDate(prevDate => {
          const newDate = new Date(prevDate);
          newDate.setMonth(months.indexOf(e.target.value));
          return newDate;
        });
      };
      const handleYearChange = (e) => {
        setCurrentDate(prevDate => {
          const newDate = new Date(prevDate);
          newDate.setFullYear(parseInt(e.target.value, 10));
          return newDate;
        });
      };
      const handlePrev = () => {
        setCurrentDate(prevDate => {
          const newDate = new Date(prevDate);
          newDate.setMonth(prevDate.getMonth() - 1);
          return newDate;
        });
      };
    
      const handleNext = () => {
        setCurrentDate(prevDate => {
          const newDate = new Date(prevDate);
          newDate.setMonth(prevDate.getMonth() + 1);
          return newDate;
        });
      };
   
  
    

    return (
        <div className='container'>
            <div className="display-time">
                <h1><Time /></h1>
            </div>
            <header>
                <div className="month">
                    <select className="month" value={months[currentDate.getMonth()]} onChange={handleMonthChange}>
                    {
                        months.map((month, index) =>(
                           <option key={index} value={month}>{month}</option>
                        ))
                    }
                    </select>
                    <select className="month" value={currentDate.getFullYear()} onChange={handleYearChange}>
                    {
                        getYears().map((month, index) =>(
                           <option key={index} value={month}>{month}</option>
                        ))
                    }
                    </select>
                </div>
                <div className="btns">
                    <button className="prev" onClick={handlePrev}>Prev</button>
                    <button className="next" onClick={handleNext}>Next</button>
                </div>
            </header>
            <div className="display" id="display">
                <div className="weekdays" id="weekdays">
                    {
                        weekdays.map((week, index) => (
                            <div className='week' key={index}>{week}</div>
                        ))
                    }
                </div>
                <div className="days" id="days">
                    {Array.from({ length: startDay }, (_, index) => (
                        <div className="empty-day" key={index}></div>
                    ))}
                    {days.map((day, index) => {
                        const isCurrentMonthDay = day === currentDate.getDate() && currentDate.getMonth() === currentMonth;
                        return (
                        <div className={isCurrentMonthDay ? 'day current-day' : 'day'} key={index}>
                            {day}
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
