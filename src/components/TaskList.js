import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';
import '../styles/taskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [ detailId, updateDetailId ] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:7079/api/tasks');
        
        setTasks(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); 

  function handleTaskClick(id) {
    updateDetailId(id);
  }

  function handleCloseDetail() {
    updateDetailId(0);
  }

  function getDetailCourseHtml() {
    const detailTask = tasks.find(myTask =>
        myTask.id === detailId);
    if (detailTask) {
        return (
          <div className="detail-container">
          <div className="detail-header">
            <h4 className="header-title">Detail Task</h4>
              <button onClick={handleCloseDetail} className="close-button">
                Close
              </button>
          </div>
          <br></br>
          <div className="detail-content">
          <div className="detail-item">
              <label>Name:</label> <span>{detailTask.className}</span>
            </div>
            <div className="detail-item">
              <label>Start Time:</label> <span>{detailTask.startTime}</span>
            </div>
            <div className="detail-item">
              <label>End Time:</label> <span>{detailTask.endTime}</span>
            </div>
            <div className="detail-item">
              <label>Priority:</label> <span>{detailTask.priority}</span>
            </div>
            <div className="detail-item">
              <label>Tag:</label> <span>{detailTask.tag}</span>
            </div>
            <div className="detail-item">
              <label>List:</label> <span>{detailTask.list}</span>
            </div>
            <div className="detail-item">
              <label>Location:</label> <span>{detailTask.location}</span>
            </div>
            <div className="detail-item">
              <label>Estimated Time:</label> <span>{detailTask.estimatedTime}</span>
            </div>
          </div>
        </div>
    );
    } 
    return <></>;
  }

  const listTaskHtml = tasks.map((task)=>
    <div key={task.id} className="task-card">
        <Task myTask={task}
                  handleTaskClick={handleTaskClick}/>
    </div>
    );

  // 渲染实体信息
  return (
    <div className="task-list-container">
      <div className="task-grid">{listTaskHtml}</div>
      <div className="divider"></div>
      { tasks.map((task)=>
          <div>
            <p>{task.id}</p>
            <p>{task.name}</p>
          </div>
      )
      }
      {getDetailCourseHtml()}
    </div>
  );
}

export default TaskList;