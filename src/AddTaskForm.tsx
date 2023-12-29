// src/AddTaskForm.tsx
import React, { useState, ChangeEvent } from 'react';

interface AddTaskFormProps {
  onAddTask: (newTask: { id: string; text: string }) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [currentTask, setCurrentTask] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCurrentTask(e.target.value);

  const handleAddTask = () => {
    if (currentTask.trim() !== '') {
      onAddTask({ id: Date.now().toString(), text: currentTask });
      setCurrentTask('');
    }
  };

  return (
    <div className='Form'>
      <input type="text" value={currentTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;