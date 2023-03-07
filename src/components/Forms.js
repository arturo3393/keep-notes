import React, { useState } from 'react';
import '../stylesheet/forms.css';
import { v4 as uuidv4 } from 'uuid'; 

function Forms(props) {

  const [input, setInput] = useState('');

  const handleChange = event =>{
    setInput(event.target.value);
  };

  const handleSent = event =>{
    event.preventDefault();

    const newTask = {
      id:uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask);
  };



  return (
    <form className='task-forms'
    onSubmit={handleSent}>
      <input
      className='task-input'
      type='text'
      placeholder='Write a task'
      name='text'
      onChange={handleChange}
      />
      <button className='btn-task'>
        Add task
      </button>
    </form>

    );
}

export default Forms; 