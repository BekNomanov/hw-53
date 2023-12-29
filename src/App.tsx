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

  const handleAddTask = (newTask: TaskItem) => setTasks([...tasks, newTask]);

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = [...tasks];
    const indexToDelete = updatedTasks.findIndex(task => task.id === taskId);

    if (indexToDelete !== -1) {
      updatedTasks.splice(indexToDelete, 1);
      setTasks(updatedTasks);
    }
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