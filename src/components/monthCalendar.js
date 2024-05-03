import React, { useState } from "react"
import "../styles/allStyles.css";
import { Row } from "react-bootstrap";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format, addDays, isWeekend, isSameMonth, isSameDay } from "date-fns";

const MonthCalendar = ({ currentTime }) => {

    function Calendar() {
        const monthStartDate = startOfMonth(currentTime);
        const monthEndDate = endOfMonth(currentTime);
        const displayStartDate = startOfWeek(monthStartDate);
        const displayEndDate = endOfWeek(monthEndDate);

        const weeks = [];
        let firstDay = displayStartDate;
        while (firstDay <= displayEndDate) {
            const daysInWeek = [];
            for (let i = 0; i < 7; i++) {
                daysInWeek.push(firstDay);
                firstDay = addDays(firstDay, 1);
            }
            weeks.push(daysInWeek);
        }

        return (
            <div>
                <table style={{ width: "100%", height: "80vh", textAlign: "center", verticalAlign: "middle", marginBottom: "10px", borderCollapse: 'collapse', border: 'none' }}>
                    <thead>
                        <tr style={{ borderCollapse: 'collapse', border: 'none' }}>
                            <th className="calendarHeader">Sunday</th>
                            <th className="calendarHeader">Monday</th>
                            <th className="calendarHeader">Tuesday</th>
                            <th className="calendarHeader">Wednesday</th>
                            <th className="calendarHeader">Thusday</th>
                            <th className="calendarHeader">Friday</th>
                            <th className="calendarHeader">Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weeks.map((week) => (
                            <tr>
                                {/* className={isWeekend(day)?"weekend":"day" */}
                                {week.map((day) => (
                                    <td className={isWeekend(day) ? "weekend" : "day"}>
                                        {format(day, 'd')}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <Calendar />
        </div>
    )
}

export default MonthCalendar;