import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from 'axios';
import MonthCalendar from "../components/monthCalendar";
import ModeGroup from "../components/modeGroup";
import WeekCalendar from "../components/WeekCalendar";
import DayCalendar from "../components/DayCalendar";

function CalendarPage() {
    const [tasks, setTasks] = useState([]);
    const [mode, setMode] = useState("month");
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    //可以直接用new date()获取今天的日期，之前那个方法是为了输出格式
    //const [currentDateTime, setCurrentDateTime] = useState(new Date(getCurrentDate()));


    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:7079/api/tasksInDate/${date}');

                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div style={{ height: '100vh' }}>
            <Row style={{ marginRight: "30px" }}>
                <div style={{ height: "100%" }}>
                    <ModeGroup mode={mode} setMode={setMode}
                        selectedDate={currentDateTime} setSelectedDate={setCurrentDateTime} />
                </div>
            </Row>
            {mode === "month" && (<Row style={{ marginRight: "30px" }}>
                <div style={{ height: "100%" }}>
                    <MonthCalendar currentTime={currentDateTime} />
                </div>
            </Row>)}
            {mode === "week" && (<Row style={{ marginRight: "30px" }}>
                <div style={{ height: "100%" }}>
                    <WeekCalendar currentTime={currentDateTime} />
                </div>
            </Row>)}
            {mode === "day" && (<Row style={{ marginRight: "30px" }}>
                <div style={{ height: "100%" }}>
                    <DayCalendar currentTime={currentDateTime} />
                </div>
            </Row>)}
        </div>
    );
}

export default CalendarPage;

/*function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getWeekRange(date) {
    const currentDate = new Date(date);
    const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const diff = currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // adjust when day is Sunday
    const firstDayOfWeek = new Date(currentDate.setDate(diff));

    return firstDayOfWeek;
}*/
