import React, { useState, useEffect } from 'react';
import './TaskList.css';

// TaskItem Component for each task
const TaskItem = ({ task, toggleCompletion, editTask, deleteTask }) => {
  return (
    <li key={task.id} className={task.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
      />
      {/* Editable task name */}
      <span onClick={() => editTask(task.id)} className="task-name">
        {task.name}
      </span>
      {/* Delete button */}
      <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
    </li>
  );
};

const TaskList = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [
    { id: 1, name: 'Collect evidence', completed: false },
    { id: 2, name: 'Draft initial paperwork', completed: false },
    { id: 3, name: 'Schedule client meeting', completed: true },
  ];

  const [tasks, setTasks] = useState(storedTasks);
  const [newTaskName, setNewTaskName] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState('');

  // Update localStorage when tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskName.trim()) {
      const newTask = {
        id: tasks.length + 1,
        name: newTaskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName(''); // Clear input field
    }
  };

  // Handle task name edit
  const editTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditingTask(taskId);
    setEditedTaskName(taskToEdit.name);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedTaskName.trim()) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask ? { ...task, name: editedTaskName } : task
        )
      );
      setEditingTask(null);
      setEditedTaskName('');
    }
  };

  // Handle task delete
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>

      {/* New task input */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Add new task..."
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Edit task input */}
      {editingTask && (
        <form onSubmit={handleEditSubmit} className="edit-task-form">
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditingTask(null)}>
            Cancel
          </button>
        </form>
      )}

      {/* Task list */}
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleTaskCompletion}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
