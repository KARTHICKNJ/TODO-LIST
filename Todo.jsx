import React, { useState } from 'react';
import './Style.css';

function Hook2() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: true } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>

    <div className="App">
      <div className="todo-container">
        <h2>TODO LIST</h2>
        <div className="add-task">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Add a task" 
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div className="task-columns">
          <div className="pending-tasks">
            <h3>PENDING</h3>
            {tasks.filter(task => !task.completed).map(task => (
              <div key={task.id} className="task-item">
                <span>{task.text}</span>
                <button className="complete" onClick={() => completeTask(task.id)}>Complete</button>
                <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            ))}
          </div>

          <div className="completed-tasks">
            <h3>COMPLETED</h3>
            {tasks.filter(task => task.completed).map(task => (
              <div key={task.id} className="task-item">
                <span>{task.text}</span>
                <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hook2;