import React from "react"
import "../styles/allStyles.css";

const MonthTasks = (tasksInDay) => {

    return(
        <div>
            {tasksInDay.map((task)=> (
                <div className={task.priority} style={{borderRadius:"5px", width:"90%", alignSelf:"center"}}>    
                    <div style={{borderRadius:"90px"}} className={`circle ${task.priority}`}></div>
                    <text>{task.name}</text>
                </div>
            ))}
        </div>
    )
}

export default MonthTasks; 