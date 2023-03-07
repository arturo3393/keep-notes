import React from 'react';
import '../stylesheet/Tasks.css';
import { AiFillCheckCircle } from 'react-icons/ai';

function Tasks({ id, text, completed, completeTask, deleteTask }) {
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className='task-text'
        onClick={() => completeTask(id)}>
        {text} 
      </div>
      <div className='task-container-icons'
        onClick={()=> deleteTask(id)}>
        <AiFillCheckCircle className='task-icon' />
      </div>
    </div>
  );
}

export default Tasks; 