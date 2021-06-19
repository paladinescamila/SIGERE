import React, {useState} from 'react';
import '../css/Calendar.css';
import { getStartDay } from '../functions/dateConverter';

export default function Calendar() {

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const startWeek = getStartDay(month, year);
    const [vars, setVars] = useState([month, year, startWeek]);
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31];
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26,27, 28, 29, 30, 31];

    const calculateCalendar = (direction) => {        
        let tempMonth = vars[0];
        let tempYear = vars[1];
        let tempStartWeek = vars[2];

        if (direction === "left"){
            if (tempMonth > 1) tempMonth -= 1;
            else {
                tempYear -= 1;
                tempMonth = 12;
            }
        }

        else{
            if (tempMonth < 12) tempMonth += 1;
            else {
                tempYear += 1;
                tempMonth = 1;
            }
        }

        tempStartWeek = getStartDay(tempMonth, tempYear);
        if (tempStartWeek <= 0) tempStartWeek += 7;
        setVars([tempMonth, tempYear, tempStartWeek]);
    }

    let styles = {
        gridColumnStart: vars[2],
    }

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={() => {calculateCalendar("left")}}>{'<'}</button>
                <p>{monthNames[vars[0]-1]} {vars[1]}</p>
                <button onClick={() => {calculateCalendar("right")}}>{'>'}</button>
            </div>
            <ul className="grid-calendar">
                <li className="week-day">L</li>
                <li className="week-day">M</li>
                <li className="week-day">X</li>
                <li className="week-day">J</li>
                <li className="week-day">V</li>
                <li className="week-day">S</li>
                <li className="week-day">D</li>
                <li className="month-day" style={styles}>1</li>
                {
                    days.filter((d) => d > 1 & d <= monthDays[vars[0]-1]).map((d) => <li className="month-day">{d}</li>)

                }
            </ul>
        </div>
    )
}
