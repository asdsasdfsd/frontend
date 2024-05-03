import React from 'react';

function Task({myTask, handleTaskClick}){
    return(
        <div>
            <div>{myTask.name}
              <button onClick={e => handleTaskClick(myTask.id)}>Details</button>
            </div>
        </div>
    )
}

export default Task;