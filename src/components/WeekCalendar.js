import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap";
import "../styles/allStyles.css";
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";

const WeekCalendar = ({ currentTime }) => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => { setCurrentDate(currentTime); }, [currentTime]);

    const displayStartDate = startOfWeek(currentDate);
    const displayEndDate = endOfWeek(currentDate);
    const hours = Array.from(Array(24).keys());
    const days = Array.from(Array(7).keys());

    //Date[] Type
    const week = eachDayOfInterval({ start: displayStartDate, end: displayEndDate });

    return (
        <div style={{ backgroundColor: "#FFFFFF", width: '100%', borderRadius: '0 0 15px 15px' }}>
            <Row style={{ width: '100%', borderRadius: '0 0 15px 15px' }}>
                <Col style={{ width: '100%', backgroundColor: "#FFFFFF", borderRadius: '0 0 15px 15px' }}>
                    <table style={{
                        width: "4%", height: '80vh', display: 'inline-table',
                        textAlign: 'right', fontSize: '13px', verticalAlign: 'bottom',
                        borderCollapse: 'collapse', border: 'none', backgroundColor: "#FFFFFF"
                    }}>
                        <tr style={{ height: '2.3vh' }}>
                            <td colSpan="1"></td>
                        </tr>
                        <tr style={{ height: '1.7vh' }}>
                            <td colSpan="1" ></td>
                        </tr>
                        <tr style={{ height: "1vh" }}><td>0:00</td></tr>
                        {hours.map((_, index) => (
                            <tr style={{ height: "1vh" }} key={index}>
                                <td>{index + 1}:00</td>
                            </tr>
                        ))}
                    </table>
                    <table style={{
                        width: "96%", height: "80vh", textAlign: "center", marginBottom: "10px",
                        borderCollapse: 'collapse', border: 'none', display: 'inline-table', backgroundColor: "#FFFFFF"
                    }}>
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
                            <tr style={{ backgroundColor: "#F7F7F7" }}>
                                {week.map((day) => (<td style={{ color: "#203CD3", fontWeight: 'bold' }}>{format(day, 'd')}</td>))}
                            </tr>
                            <tr style={{ height: '1.5vh', borderBottom: '1px solid' }}><td></td></tr>
                            {hours.map((_, index) => (
                                <tr style={{ borderBottom: '1px solid' }} key={index}>
                                    {days.map((day) => (<td>123</td>))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>
    )
}

export default WeekCalendar;