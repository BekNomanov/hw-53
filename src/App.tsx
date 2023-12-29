import React, { useState } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

interface TaskItem {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', text: 'Построить дом' },
    { id: '2', text: 'Посадить дерево' },
  ]);

  const handleAddTask = (newTaskText: string) => {
    const newTask: TaskItem = {
      id: generateUniqueId(),
      text: newTaskText,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  const generateUniqueId = (): string => {
    return Date.now().toString();
  };

  return (
    <div>
      <h1 className='h1'>List</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => handleDeleteTask(task.id)} />
      ))}
    </div>
  );
};

export default App;


