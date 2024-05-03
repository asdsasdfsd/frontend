import React from 'react';
import './App.css';
import Navbar from './Navbar';
import CalendarPage from './pages/calendarPage';
import { Routes,Route } from "react-router-dom";
import "./styles/allStyles.css";
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div className='.App'> 
      <Navbar />
      <div className='mainPage'>
        <Routes>
          <Route path= "/homepage" element={<App/>}/>
          <Route path= "/calendar" element={<CalendarPage/>}/>
          <Route path= "/create" element={<TaskForm/>}/> 
          <Route path= "/undo" element={<TaskList/>}/>
          {/* 
          <Route path= "/finished" element={<TaskList/>}/>
          <Route path= "/cancelled" element={<TaskList/>}/>
          <Route path= "/notification" element={<TaskList/>}/> 
          */}
        </Routes>
      </div>      
    </div>
  );
}

export default App;

