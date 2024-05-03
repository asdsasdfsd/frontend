import React, { useState } from "react"
import { Row } from "react-bootstrap";
import "../styles/allStyles.css";
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from "../imgs/calendarIcon.png";
import DatePicker from "react-datepicker";

const ModeGroup = ({mode , setMode , selectedDate, setSelectedDate}) => {

    const CustomInput = ({ value, onClick }) => (
        <div onClick={onClick}>
            <input style={{ borderColor: "transparent", fontSize: "40px", outline: 'none', width: '200px', height: '40px', backgroundColor: "transparent" }}
                type="text"
                value={value}
                readOnly={true}
            />
            <img src={calendarIcon} style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px" }} alt="calendar icon" />
        </div>
    );

    return (
        <div>
            <Row>
                <table style={{ marginLeft: "auto", marginRight: 0 }}>
                    <tr>
                        <td>
                            <button onClick={e => setMode(e.target.value)} className={mode === "day" ? "selectedMode" : "mode"} value="day">day</button>
                        </td>
                        <td style={{ width: "30px" }}></td>
                        <td>
                            <button onClick={e => setMode(e.target.value)} className={mode === "week" ? "selectedMode" : "mode"} value="week">week</button>
                        </td>
                        <td style={{ width: "30px" }}></td>
                        <td>
                            <button onClick={e => setMode(e.target.value)} className={mode === "month" ? "selectedMode" : "mode"} value="month" >month</button>
                        </td>
                    </tr>
                </table>
            </Row>
            <Row style={{ backgroundColor: "#FFFFFF" }}>
                <DatePicker customInput={<CustomInput />} 
                toggleCalendarOnIconClick selected={selectedDate} 
                onChange={(date) => setSelectedDate(date)} 
                dateFormat="yyyy.MM.dd" highlightDates={[new Date()]}/>
            </Row>
        </div>
    );
}

export default ModeGroup;