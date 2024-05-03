import React, { useState } from 'react';
import axios from 'axios';
import '../styles/taskForm.css';

function TaskForm() {
  // 定义表单字段的状态
  const [taskData, setTaskData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    priority: '',
    tag: '',
    list: '',
    location: '',
    estimatedTime: ''
  });

  // 处理表单字段变化的函数
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskData({ ...taskData, [name]: value });
  };

  // 处理表单提交的函数
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // 发送 POST 请求保存新任务
      await axios.post('http://localhost:7079/api/tasks', taskData);
      // 清空表单字段状态
      setTaskData({
        name: "",
        startTime: '',
        endTime: '',
        priority: '',
        tag: '',
        list: '',
        location: '',
        estimatedTime: ''
      });
      event.target.reset();
      alert('Task created successfully!');
    } catch (error) {
      console.error('Error creating task:', error);
      alert('Failed to create task. Please try again later. Error: ' + error.message);
    }
  };

  // 渲染任务创建表单
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={taskData.name} onChange={handleInputChange} required />
      </label>
      <label>
        Start Time:
        <input type="date" name="startTime" value={taskData.startTime} onChange={handleInputChange} required />
      </label>
      <label>
        End Time:
        <input type="date" name="endTime" value={taskData.endTime} onChange={handleInputChange} required />
      </label>
      <label>
        Priority:
        <select name="priority" value={taskData.priority} onChange={handleInputChange} required>
          <option value="">Select Priority</option>
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </label>
      <label>
        Tag:
        <input type="text" name="tag" value={taskData.tag} onChange={handleInputChange} />
      </label>
      <label>
        List:
        <input type="text" name="list" value={taskData.list} onChange={handleInputChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={taskData.location} onChange={handleInputChange} />
      </label>
      <label>
        Estimated Time (in minutes):
        <input type="number" name="estimatedTime" value={taskData.estimatedTime} onChange={handleInputChange} required />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
}

export default TaskForm;