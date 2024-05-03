import React, { useState, useEffect } from "react"
import { Row, Col, Form } from "react-bootstrap";
import "../styles/allStyles.css";
import { format} from "date-fns";


const DayCalendar = ({ currentTime }) => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => { setCurrentDate(currentTime); }, [currentTime]);

    const selectedDayOfWeek = format(currentDate, 'EEEE');
    const accurateDay = format(currentDate, 'd');

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <table style={{ width: "100%", height: "80vh", textAlign: "center", verticalAlign: "middle", marginBottom: "10px", borderCollapse: 'collapse', border: 'none' }}>
                <thead>
                    <tr style={{ borderCollapse: 'collapse', border: 'none' }}>
                        <th className="calendarHeader">{selectedDayOfWeek}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ color: "#203CD3", fontWeight: 'bold' }}>
                        {accurateDay}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DayCalendar;